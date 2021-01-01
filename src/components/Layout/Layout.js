import React from 'react';

import styles from './Layout.module.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
