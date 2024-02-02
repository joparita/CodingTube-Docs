import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/game-svgrepo-com.svg').default,
    description: (
      <>
        Toda la documentación que necesitas organizada de forma fácil de encontrar.
      </>
    ),
  },
  {
    title: 'Explicaciones claras',
    Svg: require('@site/static/img/table-of-contents-svgrepo-com.svg').default,
    description: (
      <>
        Esta documentación complementa la explicación en video que encuentras en el canal de YouTube.
      </>
    ),
  },
  {
    title: 'Aprende desde cero',
    Svg: require('@site/static/img/line-graph-svgrepo-com.svg').default,
    description: (
      <>
        Está dirigido para personas que estan empezando en el mundo del desarrollo web, pero también para quienes ya tienen experiencia y quieren mejorar sus habilidades.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
