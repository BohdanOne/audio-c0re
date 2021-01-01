import React, { useState } from 'react';
import { Link } from 'gatsby';

import styles from './LocationLinks.module.css';

export default function LocationLinks({ locations }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen((prevState) => !prevState);
  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        aria-label='expand locations links list'
        onClick={toggleList}
      >
        locations
      </button>
      <ul className={styles.list}>
        {isOpen &&
          locations.map(({ node }) => {
            return (
              <li key={node.id} className={styles.locationLink}>
                <Link to={`/location/${node.slug}`}>{node.location}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
