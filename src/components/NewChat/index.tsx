import styles from './styles.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

interface IActiveChat {
    chadId: string;
    name: string;
    message: string;
    image: string;
}

interface INewChat {
    show: boolean;
    user: {
        userId: string;
    }
    chatList: IActiveChat[];
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewChat = ({ show, setShow, chatList, user }: INewChat) => {
    const [contactList, setContactList] = useState([
        { id: '21312', avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg', name: 'Jhoe Doe' },
        { id: '21s', avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg', name: 'Jhoe Doe Jacson' },
        { id: '211312', avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg', name: 'Jacson Doe' },
        { id: '213s212', avatarUrl: 'https://randomuser.me/api/portraits/women/91.jpg', name: 'Jhoe Doe' },
    ])

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
                    <div className={styles.container_n_i} key={item.id}>
                        <img src={item.avatarUrl} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </main>
        </div>
    );
}