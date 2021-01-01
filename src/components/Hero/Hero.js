import React from 'react';
import Img from 'gatsby-image';

import styles from './Hero.module.css';

export default function Hero({ img, title }) {
  return (
    <div className={styles.container}>
      <Img fluid={img} alt='skull wearing headphones' />
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{title}</h1>
      </div>
    </div>
  );
}
