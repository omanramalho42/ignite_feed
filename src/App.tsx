import React from 'react';


import { 
  Header,
  Sidebar,
  Post
} from './components/index.ts';

import './styles/global.css';
import styles from './styles/App.module.css';

import { PostProps } from './components/Post/index.tsx';

const posts: PostProps[] = [
  { 
    id: 1, 
    author: {
      avatarUrl: "https://github.com/omanramalho42.png",
      name: "Oman Ramalho",
      role: "CTO @ OmanCompany"
    },
    content: [
      { type: "paragraph", contentText: "Fala galeraa 👋" },
      { type: "paragraph", contentText: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "anchor", contentText: "👉 jane.design/doctorcare " },
    ],
    publishedAt: new Date("2022-08-19 20:00:00")
  },
  { 
    id: 2, 
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "CTO @ RocketSeat"
    },
    content: [
      { type: "paragraph", contentText: "Fala galeraa 👋" },
      { type: "paragraph", contentText: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "anchor", contentText: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-19 20:10:00")
  },
];

export const App:React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        {posts.map((post) => {
          return (
            <main key={post.id}>
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            </main>
          )
        })}
      </div>
    </div>
  )
}

export default App;
