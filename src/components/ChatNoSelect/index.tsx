import styles from './styles.module.scss'
import connection from '../../assets/intro-connection-hq-light.jpg'

export const ChatNoSelect = () => {

    return (
        <section className={styles.container}>
            <img src={connection} alt="connection" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>
                O WhatsApp conecta ao seu telefone para sincronizar suas messages.
                <br />
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </section>
    );
}