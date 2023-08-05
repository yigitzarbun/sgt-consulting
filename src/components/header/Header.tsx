import { Link, NavLink } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

import Paths from "../../routing/Paths";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <Link to={Paths.HOME}>
        <img src="/images/logo/logo.png" alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.nav}>
        <nav className={styles["site-nav"]}>
          <NavLink
            to={Paths.ABOUT}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            About
          </NavLink>
          <NavLink
            to={Paths.SERVICES}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to={Paths.PORTFOLIO}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to={Paths.CONTACT}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className={styles["social-nav"]}>
          <FaFacebookF className={styles["social-icon"]} />
          <FaTwitter className={styles["social-icon"]} />
          <FaInstagram className={styles["social-icon"]} />
        </div>
      </div>
    </div>
  );
};
export default Header;
