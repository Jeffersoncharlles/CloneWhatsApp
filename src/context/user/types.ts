export interface IUserContext {
    Sign: () => Promise<void>;
    user: any;
    contactList: IContact[]
    AllListContact: (userId: string) => Promise<void>
    CreateNewChat: (user: IUser, contact: IUser) => Promise<void>
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