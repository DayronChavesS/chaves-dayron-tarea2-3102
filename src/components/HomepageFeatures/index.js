import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus es un poderoso motor de documentacion desarrollado por Meta Inc, 
        que funciona con React.JS
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Esta pagina web ofrece una barra de busqueda gracias a la API de Algolia Search.
      </>
    ),
  },
  {
    title: 'Markup',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Este sitio web utiliza HTML5/CSS y Markdown para las entradas en el Trabajo Escrito 
        y en el Blog. Son paginas estaticas, y su codigo fuente debe ser compilado para ser
        liberado a internet.
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
        <Heading as="h3">{title}</Heading>
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
