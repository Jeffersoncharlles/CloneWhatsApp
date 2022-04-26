import { useUser } from '../../context/user';
import styles from './styles.module.scss'

export const Login = () => {
    const { Sign } = useUser();

    const handleFacebookLogin = () => {
        Sign()
    }

    return (
        <div className={styles.container}>
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}