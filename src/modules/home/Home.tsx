import { Link } from "react-router-dom";

import HomeCarousel from "../../components/home/carousel/HomeCarousel";

import Paths from "../../routing/Paths";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Hotel Procurement With Style</h1>
      <HomeCarousel />
      <div className={styles.texts}>
        <h2 className={styles.subtitle}>Our Added Value</h2>
        <p className={styles.body}>
          SGT understands their customer's - partner's needs. What really makes
          us different from others is our unique set up and support of our
          creative, technical and engineering divisions.
        </p>
        <Link to={Paths.CONTACT}>
          <button className={styles.button}>Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
