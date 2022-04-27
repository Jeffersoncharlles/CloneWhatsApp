import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Request from '../../services/firebase'
import { IContact, IUser, IUserContext, IChatList } from './types'

interface IProvider {
    children: ReactNode
}

export const UserContext = createContext({} as IUserContext)


export const UserProvider = ({ children }: IProvider) => {
    const [user, setUser] = useState({} as IUser)
    const [contactList, setContactList] = useState<IContact[]>([])
    const [chatList, setChatList] = useState<IChatList[]>([])
    const [activeChat, setActiveChat] = useState<IChatList>({} as IChatList);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user.id) {
            HasChatList(user.id)
        }
    }, [user])


    const Sign = async () => {
        const result = await Request.fbPopup()
        if (result) {
            const newUser = {
                id: result.user?.uid,
                name: result.user?.displayName,
                avatarUrl: result.user?.photoURL
            }
            await Request.createUser(newUser)
            setUser(newUser)
        } else {
            alert("Error!")
        }
    }

    const AllListContact = async (userId: string) => {
        const result = await Request.fullContactList(userId)
        setContactList(result)
    }

    const CreateNewChat = async (user: IUser, contact: IUser) => {
        const result = await Request.createNewChat(user, contact)
    }

    const HasChatList = async (userId: string) => {
        Request.onChatList(userId, setChatList)
    }

    const HasChatContent = async (chatId: string, setMessageList: React.Dispatch<React.SetStateAction<never[]>>) => {
        Request.onChatContent(chatId, setMessageList, setUsers)
    }

    const HasSendMessage = async (chatData: any, userId: string, type: string, body: any) => {
        Request.sendMessage(chatData, userId, type, body, users)
    }

    return (
        <UserContext.Provider value={{
            user, contactList, chatList, activeChat,
            Sign, AllListContact, CreateNewChat, HasChatList, setActiveChat, HasChatContent, HasSendMessage
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    return context
}