import * as React from 'react';
import { Link } from 'gatsby';

import styles from './404.module.css';
import Layout from '../components/Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <main className={styles.pageContent}>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry{' '}
          <span role='img' aria-label='Pensive emoji'>
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
          <br />
          <Link to='/'>Go home</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
