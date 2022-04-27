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
import { useUser } from '../../context/user';

declare const window: any;
interface IChatWindow {
    user: {
        id: string;
        name: string;
        avatarUrl: string;
    }
    data: {
        chatId: string;
        title: string;
        lastMessage: string;
        lastMessageDate?: {
            nanoseconds: number;
            seconds: number;
        }
        image: string;
    }
}
interface IMessage {
    author: string;
    body: string;
    date: {
        nanoseconds: number;
        seconds: number;
    }
    type: string
}

export const ChatWindow = ({ user, data }: IChatWindow) => {
    const { HasChatContent, HasSendMessage } = useUser()
    const body: any = useRef();

    const [openEmoji, setOpenEmoji] = useState(false)
    const [message, setMessage] = useState('')
    const [listening, setListening] = useState(false)
    const [messageList, setMessageList] = useState<IMessage[]>([])

    console.log(messageList)

    useEffect(() => {
        setMessageList([])
        HasChatContent(data.chatId, setMessageList)

    }, [data.chatId])


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

    // const handleInputKeyUp = (e: KeyboardEvent) => {
    //     //apertou enter
    //     if (e.keyCode == 13) {
    //         handleSendClick()
    //     }
    // }
    const handleSendClick = () => {
        if (message !== '') {
            HasSendMessage(data, user.id, 'text', message)
            setMessage('');
            setOpenEmoji(false)
        }
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
                    <img src={data.image} alt={data.title} />
                    <span>
                        {data.title}
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
                        onKeyUp={(e) => e.keyCode == 13 ? handleSendClick() : () => { }}
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