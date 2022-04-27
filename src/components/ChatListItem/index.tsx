import styles from './styles.module.scss'

interface IChat {
    data: {
        chatId: string;
        title: string;
        lastMessage: string;
        lastMessageDate?: {
            nanoseconds: number;
            seconds: number;
        }
        image: string;
    };
    active: boolean;
    setActive: any
}

export const ChatListItem = ({ data, active, setActive }: IChat) => {


    const formatDate = (date: any) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        })
    }

    return (
        <div className={`${styles.container} ${active ? styles.active : ''}`} onClick={setActive}>
            <img src={data.image} alt={data.title} />
            <div className={styles.container_Chat}>
                <div className={styles.container_Chat_Info}>
                    <span>{data.title}</span>
                    <small>
                        {formatDate(Number(data.lastMessageDate?.seconds) * 1000 + Number(data.lastMessageDate?.nanoseconds) / 1000000)}
                    </small>
                </div>
                <div className={styles.container_Chat_Info}>
                    <div className={styles.container_Chat_Info_MSgs}>
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}