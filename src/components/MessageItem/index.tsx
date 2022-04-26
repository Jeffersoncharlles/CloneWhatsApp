import styles from './styles.module.scss'

interface IMessage {
    data: {
        name: string;
        message: string;
        image: string;
        author: string
    }
    user: {
        userId: string;
    }
}

export const MessageItem = ({ data, user }: IMessage) => {

    return (
        <div
            className={styles.container}
            style={{ justifyContent: String(user.userId) === String(data.author) ? 'flex-end' : 'flex-start' }}
        >
            <div
                className={styles.container_i}
                style={{ backgroundColor: String(user.userId) === String(data.author) ? '#DCF8C6' : '#fff' }}

            >
                <strong>
                    {data.message}
                </strong>
                <span>19:00</span>
            </div>
        </div>
    );
}