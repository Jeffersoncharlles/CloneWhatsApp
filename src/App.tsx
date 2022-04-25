import { useEffect, useState } from 'react';

import styles from './style/app.module.scss'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from './components/ChatListItem';


function App() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

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
            <ChatListItem key={index} data={item} />
          ))}
        </section>
      </nav>

      <main className={styles.Container_Main}>
        ...
      </main>
    </div>
  )
}

export default App
