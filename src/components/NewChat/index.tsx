import styles from './styles.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/user';

interface IActiveChat {
    chatId: string;
    title: string;
    image: string;
}

interface INewChat {
    show: boolean;
    user: {
        id: string;
        name: string;
        avatarUrl: string;
    }
    chatList: IActiveChat[];
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewChat = ({ show, setShow, chatList, user }: INewChat) => {
    const { AllListContact, contactList, CreateNewChat } = useUser()

    useEffect(() => {
        if (user.id) {
            AllListContact(user.id)
        }
    }, [user])

    const handleCreateNewChat = async (contact: any) => {
        CreateNewChat(user, contact)
        setShow(false)
    }

    return (
        <div className={styles.container} style={{ left: show ? 0 : -415 }}>
            <header>
                <div className={styles.container_b} onClick={() => setShow(false)}>
                    <ArrowBackIcon style={{ color: '#fff' }} />
                </div>
                <span className={styles.container_t}>
                    Nova Conversa
                </span>
            </header>
            <main>
                {contactList.map((item, index) => (
                    <div className={styles.container_n_i} key={index} onClick={() => handleCreateNewChat(item)}>
                        <img src={item.avatarUrl} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </main>
        </div>
    );
}