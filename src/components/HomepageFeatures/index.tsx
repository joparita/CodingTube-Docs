import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  urlImg: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "HTML",
    urlImg: require("@site/static/img/HTML.png").default,
    link: "https://www.youtube.com/watch?v=QwMlgfMK6fQ&list=PLJubkp8BnTJt-pKYkVNLt72n1hKmYmkFw",
    description: (
      <>Toda página debe tener una estructura HTML, empieza por aquí.</>
    ),
  },
  {
    title: "CSS",
    urlImg: require("@site/static/img/CSS.png").default,
    link: "https://www.youtube.com/watch?v=I_RG3bNjTfQ&list=PLJubkp8BnTJt1u6z_voRiYtwskmP0VVzw",
    description: (
      <>
        Los estilos son importantes para que tu página se vea bien, aprende a
        usar CSS.
      </>
    ),
  },
  {
    title: "Javascript",
    urlImg: require("@site/static/img/javascript.png").default,
    link: "https://www.youtube.com/watch?v=3oSeQb94Ga4&list=PLJubkp8BnTJsDgWXWcS1Z0VDV7rAOqbU4",
    description: (
      <>Aprende a darle funcionalidad a tu página web con Javascript.</>
    ),
  },
  {
    title: "Tailwind",
    urlImg: require("@site/static/img/tailwind.png").default,
    link: "https://www.youtube.com/watch?v=gvdvuGSksDU&list=PLJubkp8BnTJu9khizC7ywblms1YzdLO3g",
    description: (
      <>
        Framework de CSS que te ayudará a darle estilos a tu página web de
        manera más rápida.
      </>
    ),
  },
  {
    title: "React",
    urlImg: require("@site/static/img/react.png").default,
    link: "https://www.youtube.com/watch?v=Ed9OM9uQTAA&list=PLJubkp8BnTJshwFKJGgAiQy2HrkTeYT1a",
    description: <>Aprende a crear aplicaciones web con React.</>,
  },
];

function Feature({ title, urlImg, description, link }: FeatureItem) {
  return (
    <div className={`${clsx("col col--4")}`}>
      <div className="text--center">
        <a href={link} target="_blank">
          <img src={urlImg} alt={title} className={styles.featureSvg} />
        </a>
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
        <Heading as="h1" className="hero__title">
          Cursos:
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
