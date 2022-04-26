import { createContext, ReactNode, useContext, useState } from "react";
import Request from '../../services/firebase'
import { IContact, IUser, IUserContext } from './types'

interface IProvider {
    children: ReactNode
}

export const UserContext = createContext({} as IUserContext)


export const UserProvider = ({ children }: IProvider) => {
    const [user, setUser] = useState({ id: '5mqLvjnTdebHm0BlWr0S6UPUGOI3', name: 'Jefferson Nogueira', avatarUrl: 'https://graph.facebook.com/1433462710438007/picture' } as IUser)
    const [contactList, setContactList] = useState<IContact[]>([])


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

    return (
        <UserContext.Provider value={{
            user, contactList,
            Sign, AllListContact, CreateNewChat
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    return context
}