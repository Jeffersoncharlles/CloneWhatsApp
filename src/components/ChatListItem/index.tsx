import styles from './styles.module.scss'

interface IChat {
    key: number;
    data: {
        chadId: string;
        name: string;
        message: string;
        image: string;
    };
    active: boolean;
    setActive: () => void;
}

export const ChatListItem = ({ data, active, setActive }: IChat) => {


    return (
        <div className={`${styles.container} ${active ? styles.active : ''}`} onClick={setActive}>
            <img src={data.image} alt={data.name} />
            <div className={styles.container_Chat}>
                <div className={styles.container_Chat_Info}>
                    <span>{data.name}</span>
                    <small>19:00</small>
                </div>
                <div className={styles.container_Chat_Info}>
                    <div className={styles.container_Chat_Info_MSgs}>
                        <p>{data.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}