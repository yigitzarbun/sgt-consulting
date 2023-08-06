import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";

import Paths from "../../routing/Paths";

import styles from "./styles.module.scss";
import MenuModal from "./menu-modal/MenuModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
      <SlMenu className={styles["menu-icon"]} onClick={handleModal} />
      <MenuModal
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
export default Header;
