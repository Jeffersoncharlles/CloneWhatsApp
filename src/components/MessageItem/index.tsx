import styles from './styles.module.scss'

interface IMessage {
    data: {

    }
}

export const MessageItem = ({ data }: IMessage) => {

    return (
        <div className={styles.container}>
            <div className={styles.container_i}>
                <strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro ducimus itaque aliquam sed eveniet iusto pariatur dignissimos culpa doloribus harum similique illum, dolore magni quam laboriosam ipsa, blanditiis non.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, recusandae excepturi reiciendis inventore optio delectus necessitatibus. Quod mollitia eaque voluptatem accusantium non. Maxime totam, recusandae corporis possimus cumque in repudiandae!
                </strong>
                <span>19:00</span>
            </div>
        </div>
    );
}