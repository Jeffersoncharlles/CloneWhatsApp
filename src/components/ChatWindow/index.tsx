import EmojiPicker, { IEmojiData } from 'emoji-picker-react';
import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { useEffect, useRef, useState } from 'react';
import { MessageItem } from '../MessageItem';

declare const window: any;

const users = [
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
    { name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg', author: '1s' },
    { name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg', author: '1s' },
    { name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg', author: '111' },
]

interface IChatWindow {
    user: {
        userId: string;
    }
}

export const ChatWindow = ({ user }: IChatWindow) => {
    const body: any = useRef();

    const [openEmoji, setOpenEmoji] = useState(false)
    const [message, setMessage] = useState('')
    const [listening, setListening] = useState(false)
    const [messageList, setMessageList] = useState(users)


    useEffect(() => {
        //conteúdo dentro do body e maior que 
        // a atura real da tela 
        if (body.current.scrollHeight > body.current.offsetHeight) {
            //se sim joga a rolagem para baixo
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [messageList])

    const handleEmojiClick = (event: React.MouseEvent, data: IEmojiData) => {
        //receber o emoji clicado
        setMessage(message + data.emoji)
    }

    const handleSendClick = () => {

    }

    let recognition: any = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
    }


    const handleMicClick = () => {
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
                //escutar mic
            }
            recognition.onend = () => {
                setListening(false);
                //parar mic
            }
            recognition.onresult = (e: any) => {
                setMessage(e.results[0][0].transcript)
                //resultado transcrição
            }
            recognition.start()
        }
    }





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

            <article ref={body}>
                {messageList.map((item, index) => (
                    <MessageItem
                        key={index}
                        data={item}
                        user={user}
                    />
                ))}

            </article>

            <div className={styles.content_E} style={{ height: openEmoji ? '350px' : '0' }}>
                <EmojiPicker
                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick={handleEmojiClick}
                />
            </div>

            <footer>
                <div className={styles.pre}>
                    <div className={styles.btn_c} onClick={() => setOpenEmoji(false)} >
                        {openEmoji && (
                            <CloseIcon />
                        )}
                    </div>
                    <div className={styles.btn_c} onClick={() => setOpenEmoji(true)}>
                        {!openEmoji && (
                            <InsertEmoticonIcon />
                        )}
                    </div>
                </div>

                <div className={styles.content}>
                    <input type="text"
                        placeholder='Digite uma mensagem'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className={styles.send}>
                    {message === '' ? (
                        <div className={styles.btn_c} onClick={handleMicClick}>
                            {listening ? (<SettingsVoiceIcon className={styles.btn_c_b} />)
                                : (<MicIcon />)}
                        </div>
                    ) : (
                        <div className={styles.btn_c} onClick={handleSendClick} >
                            <SendIcon />
                        </div>
                    )}


                </div>

            </footer>
        </section>
    );
}