export interface IUserContext {
    Sign: () => Promise<void>;
    user: any;
    contactList: IContact[]
    AllListContact: (userId: string) => Promise<void>
    CreateNewChat: (user: IUser, contact: IUser) => Promise<void>
    chatList: IChatList[]
    HasChatList: (userId: string) => Promise<void>
    activeChat: IActiveChat
    setActiveChat: React.Dispatch<React.SetStateAction<any>>
    HasChatContent: (chatId: string, setMessageList: any) => Promise<void>
    HasSendMessage: (chatData: any, userId: string, type: string, body: any) => Promise<void>
}

export interface IUser {
    id: string | undefined;
    name: string | null | undefined;
    avatarUrl: string | null | undefined;
}

export interface IContact {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface IChatList {
    chatId: string;
    title: string;
    lastMessage: string;
    lastMessageDate?: {
        nanoseconds: number;
        seconds: number;
    }
    image: string;
}


interface IActiveChat {
    chatId: string;
    title: string;
    lastMessage: string;
    lastMessageDate?: {
        nanoseconds: number;
        seconds: number;
    }
    image: string;
}