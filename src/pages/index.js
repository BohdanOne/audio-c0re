import React from 'react';
import { graphql } from 'gatsby';

import styles from './index.module.css';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import SEO from '../components/SEO';

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <header>
        <Hero
          img={data.file.childImageSharp.fluid}
          title={data.contentfulHomePage.title}
        />
      </header>
      <main className={styles.pageContent}>
        <p>{data.contentfulHomePage.slogan}</p>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "skull-with-headphones.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contentfulHomePage {
      title
      slogan
    }
  }
`;
