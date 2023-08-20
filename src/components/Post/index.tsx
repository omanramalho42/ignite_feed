import React, { useState, FormEvent, ChangeEvent } from 'react';

import Comment from '../Comment';

import styles from './styles.module.css';
import Avatar from '../Avatar';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface AuthorProps {
  avatarUrl: string;
  name: string;
  role: string;
}

interface ContentProps {
  type: 'paragraph' | 'anchor';
  contentText: string;
};

export interface PostProps {
  id?: number;
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

const Post:React.FC<PostProps> = ({ author, publishedAt, content }: PostProps) => {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [comments, setComments] = useState<string[]>([
    "Post muito bacana heinn?!",
    "Muito bom Devon, parabéns!! 👏👏"
  ]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment]);
   
    setNewComment(""); 
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  const handleNewCommentInvalid = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  const handleDeleteCommand = (commentToBeDeleted: string) => {
    const commentsWithoutDeletedOne = 
      comments.filter((comment) => {
        return comment !== commentToBeDeleted
      });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.author}>
          <Avatar 
            hasBorder
            src={author.avatarUrl}
            alt='avatar'
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={styles.contentPost}>
        {content.map((line) => { 
          if(line.type === "paragraph") { 
            return (
              <p key={line.contentText}>
                { line.contentText }
              </p>
            )
          } else if (line.type === "anchor") { 
            return (
              <a key={line.contentText} href="">
                { line.contentText }
              </a>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.postCommentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder='Deixe seu comentário...'
          onInvalid={handleNewCommentInvalid}
          required
        />
        <div>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </div>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment 
            key={comment}
            comment={comment} 
            onDeleteCommand={() => handleDeleteCommand(comment)} 
          />
        ))}
      </div>
    </article>
  )
}

export default Post