import styles from './styles.module.scss'

interface IChat {
    data: {

    }
}

export const ChatListItem = ({ }: IChat) => {

    return (
        <div className={styles.container}>
            <img src="https://randomuser.me/api/portraits/women/91.jpg" alt="" />
            <div className={styles.container_Chat}>
                <div className={styles.container_Chat_Info}>
                    <span>Shelly Hunter</span>
                    <small>19:00</small>
                </div>
                <div className={styles.container_Chat_Info}>
                    <div className={styles.container_Chat_Info_MSgs}>
                        <p>Ola... ta ficando bom ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}