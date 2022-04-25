import { useEffect, useState } from 'react';

import styles from './style/app.module.scss'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from './components/ChatListItem';
import { ChatNoSelect } from './components/ChatNoSelect';
import { ChatWindow } from './components/ChatWindow';


interface IActiveChat {
  chadId: string;
  name: string;
  message: string;
  image: string;
}

const users = [
  { chadId: '1s', name: 'Shelly Hunter', message: 'hello how are you?', image: 'https://randomuser.me/api/portraits/women/91.jpg' },
  { chadId: '12s', name: 'Gwendolyn Jacobs', message: 'Hi !my boy ', image: 'https://randomuser.me/api/portraits/women/78.jpg' },
  { chadId: '13s', name: 'Brett Hunt', message: 'Yeap! brother...!', image: 'https://randomuser.me/api/portraits/men/86.jpg' },
]

function App() {
  const [chatList, setChatList] = useState<IActiveChat[]>(users)
  const [activeChat, setActiveChat] = useState<IActiveChat>({} as IActiveChat);

  useEffect(() => {

  }, [])

  return (
    <div className={styles.app}>
      <nav className={styles.container_Sidebar}>
        <header>
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
          <div>
            <div className={styles.btn}>
              <DonutLargeIcon />
            </div>
            <div className={styles.btn}>
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
          <ChatWindow />
        ) : (
          <ChatNoSelect />
        )}
      </main>
    </div>
  )
}

export default App
