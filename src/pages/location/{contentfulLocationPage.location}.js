import React from 'react';
import { graphql } from 'gatsby';

import styles from './LocationPage.module.css';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO';

export default function LocationPage({ data }) {
  return (
    <Layout>
      <SEO title={data.contentfulLocationPage.location} />

      <h1>{data.contentfulLocationPage.location}</h1>
      <div className={styles.mapContainer}>
        <iframe
          title={`${data.contentfulLocationPage.location} map`}
          width='100%'
          height='500'
          id='gmap_canvas'
          src={`https://maps.google.com/maps?q=${data.contentfulLocationPage.coords.lat}%2C%20${data.contentfulLocationPage.coords.lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
        ></iframe>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    contentfulLocationPage(id: { eq: $id }) {
      location
      slug
      coords {
        lat
        lon
      }
    }
  }
`;
