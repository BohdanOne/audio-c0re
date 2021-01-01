import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './Footer.module.css';

export default function Footer() {
  const data = useStaticQuery(query);
  return (
    <footer className={styles.container}>
      <p className={styles.footerText}>
        Built by <a href='https://bohdanone.github.io/'>Bohdan Imiela</a> as a
        part of{' '}
        <a href='https://www.gatsbyjs.com/blog/100days/'>#100DaysOfGatsby</a>
      </p>
      <p className={styles.footerText}>
        Hero Photo by{' '}
        <a href='https://unsplash.com/@brett_jordan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Brett Jordan
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/headphones?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Unsplash
        </a>
      </p>
      <a href='https://www.gatsbyjs.com/blog/100days/'>
        <Img fixed={data.file.childImageSharp.fixed} alt='Gatsby logo' />
      </a>
    </footer>
  );
}

const query = graphql`
  query {
    file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
