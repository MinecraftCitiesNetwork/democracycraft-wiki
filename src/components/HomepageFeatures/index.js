import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Find Job Guides',
    Svg: require('@site/static/img/Fa-Team-Fontawesome-FontAwesome-Book-Bookmark.svg').default,
    description: (
      <>
        This wiki contains everything you need to know about in game jobs!
        No more guess-work, read the relevant guide here and take the exam. :)
      </>
    ),
  },
  {
    title: 'Tips and Tricks',
    Svg: require('@site/static/img/Fa-Team-Fontawesome-FontAwesome-Lightbulb.svg').default,
    description: (
      <>
        Learn about popular ways of making money, vital server features and
        more all from the comfort of this wiki.
      </>
    ),
  },
  {
    title: 'Learn about server history',
    Svg: require('@site/static/img/Fa-Team-Fontawesome-FontAwesome-Clock.svg').default,
    description: (
      <>
        With over three years under our belt, this server has been through
        many periods of change and growth. You can learn all about that here!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
