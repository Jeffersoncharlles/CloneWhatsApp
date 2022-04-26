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
import { useUser } from './context/user';
import { Login } from './pages/Login';


interface IActiveChat {
  chadId: string;
  name: string;
  message: string;
  image: string;
}



function App() {
  const { user } = useUser()
  const [chatList, setChatList] = useState<IActiveChat[]>([])
  const [activeChat, setActiveChat] = useState<IActiveChat>({} as IActiveChat);
  const [showNewChat, setShowNewChat] = useState(false)

  if (!user.id) {
    return (
      <Login />
    )
  }

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
            <img src={user.avatarUrl} alt={user.name} />
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
