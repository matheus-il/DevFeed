import { Header } from './components/Header';
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/matheus-il.png',
      name: 'Matheus Souza',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais esse projeto para o meu portifólio. Estudando sempre! E estou adorando criar esses projetos e compartilhar aqui. 🚀' },
      { type: 'link', content: 'github.com/matheus-il' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador'
    },
    content: [
      { type: 'paragraph', content: 'Fala Math!' },
      { type: 'paragraph', content: 'Excelente, mais um projeto! Praticar sempre e se manter atualizado é o segredo 🚀' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
] as PostProps[];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}