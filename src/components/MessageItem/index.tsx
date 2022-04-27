import styles from './styles.module.scss'

interface IMessage {
    data: {
        author: string;
        body: string;
        date: {
            nanoseconds: number;
            seconds: number;
        }
        type: string
    }
    user: {
        id: string;
        name: string;
        avatarUrl: string;
    }
}

export const MessageItem = ({ data, user }: IMessage) => {


    const formatDate = (date: any) => {
        const datesHoras = new Date(date).getHours();
        const dateMinute = new Date(date).getMinutes();
        return `${datesHoras}:${dateMinute}`
    }
    return (
        <div
            className={styles.container}
            style={{ justifyContent: String(user.id) === String(data.author) ? 'flex-end' : 'flex-start' }}
        >
            <div
                className={styles.container_i}
                style={{ backgroundColor: String(user.id) === String(data.author) ? '#DCF8C6' : '#fff' }}

            >
                <strong>
                    {data.body}
                </strong>
                <span>{formatDate(Number(data.date?.seconds) * 1000 + Number(data.date?.nanoseconds) / 1000000)}</span>
            </div>
        </div>
    );
}