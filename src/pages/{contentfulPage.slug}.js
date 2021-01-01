import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

export default function Page({ data }) {
  return (
    <Layout>
      <SEO title={data.contentfulPage.title} />
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.text.text}</p>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
      slug
      text {
        text
      }
    }
  }
`;
