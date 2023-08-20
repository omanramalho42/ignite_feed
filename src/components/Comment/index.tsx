import React, { useState } from 'react';

import styles from './styles.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

import Avatar from '../Avatar';

interface CommentProps {
  comment: string;
  onDeleteCommand: () => void;
}

const Comment:React.FC<CommentProps> = ({ comment, onDeleteCommand }) => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.commentContainer}>
      <Avatar 
        hasBorder={false} 
        src={"https://github.com/omanramalho42.png"}
        alt='avatar'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Oman Ramalho</strong>
              <time title="11 de Maio às 08:13h" dateTime="2023-08-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button 
              title='Deletar Comentário' 
              onClick={onDeleteCommand}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>
           { comment }
          </p>
        </div>

        <footer>
          <button 
            onClick={() => setLikeCount((likes) => ++likes)}
          >
            <ThumbsUp size={20} />
            <p>Aplaudir</p>
            <span>{ likeCount }</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment