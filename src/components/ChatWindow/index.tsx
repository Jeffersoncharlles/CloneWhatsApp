import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';

export const ChatWindow = () => {

    return (
        <section className={styles.container}>
            <header>
                <div className={styles.he_info}>
                    <img src="https://randomuser.me/api/portraits/women/91.jpg" alt="" />
                    <span>
                        Shelly Hunter
                    </span>
                </div>
                <div className={styles.he_btn}>
                    <div className={styles.he_btn_bt}>
                        <SearchIcon />
                    </div>
                    <div className={styles.he_btn_bt}>
                        <AttachFileIcon />
                    </div>
                    <div className={styles.he_btn_bt}>
                        <MoreVertIcon />
                    </div>
                </div>
            </header>
            <article>

            </article>
            <footer>
                <div className={styles.pre}>
                    <div className={styles.btn_c}>
                        <InsertEmoticonIcon />
                    </div>
                </div>

                <div className={styles.content}>
                    <input type="text"
                        placeholder='Digite uma mensagem'


                    />
                </div>

                <div className={styles.send}>
                    <div className={styles.btn_c}>
                        <SendIcon />
                    </div>
                </div>

            </footer>
        </section>
    );
}