import { useEffect, useState } from 'react';

import styles from './style/app.module.scss'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from './components/ChatListItem';
import { ChatNoSelect } from './components/ChatNoSelect';
import { ChatWindow } from './components/ChatWindow';
import { NewChat } from './components/NewChat';


interface IActiveChat {
  chadId: string;
  name: string;
  message: string;
  image: string;
}

const users = [
  { chadId: '1s', name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg' },
  { chadId: '1ss', name: 'Shelly Hunter', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/91.jpg' },
  { chadId: '1sss', name: 'Shelly Hunter', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/women/91.jpg' },
]

function App() {
  const [chatList, setChatList] = useState<IActiveChat[]>(users)
  const [activeChat, setActiveChat] = useState<IActiveChat>({} as IActiveChat);
  const [user, setUser] = useState({ userId: '111' })
  const [showNewChat, setShowNewChat] = useState(false)

  useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <nav className={styles.container_Sidebar}>
          <NewChat
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
            chatList={chatList}
          />
          <header>
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
            <div>
              <div className={styles.btn}>
                <DonutLargeIcon />
              </div>
              <div className={styles.btn} onClick={() => setShowNewChat(true)}>
                <ChatIcon />
              </div>
              <div className={styles.btn}>
                <MoreVertIcon />
              </div>
            </div>
          </header>

          <div className={styles.container_Sidebar_Search}>
            <div>
              <SearchIcon fontSize='small' style={{ color: '#919191' }} />
              <input type="search" placeholder='Procurar ou começar uma nova conversa' />
            </div>
          </div>

          <section className={styles.container_Sidebar_Chart}>

            {chatList.map((item, index) => (
              <ChatListItem
                key={index}
                data={item}
                setActive={() => setActiveChat(item)}
                active={activeChat.chadId === item.chadId}
              />
            ))}

          </section>

        </nav>

        <main className={styles.Container_Main}>
          {activeChat.chadId !== undefined ? (
            <ChatWindow user={user} />
          ) : (
            <ChatNoSelect />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
