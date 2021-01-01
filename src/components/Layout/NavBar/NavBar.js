import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './NavBar.module.css';
import LocationLinks from './LocationLinks/LocationLinks';

export default function NavBar() {
  const data = useStaticQuery(query);

  return (
    <div className={styles.outerContainer}>
      <nav className={styles.innerContainer}>
        <Link to='/' className={styles.pageTitle}>
          <span role='img' aria-label='headphones'>
            🎧
          </span>
          <span>{data.site.siteMetadata.title}</span>
        </Link>
        <ul className={styles.linkList}>
          {data.allContentfulPage.edges.map(({ node }) => {
            return (
              <li className={styles.link} key={node.id}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
              </li>
            );
          })}
          <li className={styles.link}>
            <LocationLinks locations={data.allContentfulLocationPage.edges} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allContentfulLocationPage {
      edges {
        node {
          id
          location
          slug
        }
      }
    }
  }
`;
