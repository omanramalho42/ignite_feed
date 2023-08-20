import React, { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar:React.FC<AvatarProps> = ({ hasBorder = true, ...rest }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest} 
    />
  )
}

export default Avatar;