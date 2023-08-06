import Modal from "react-modal";

import { NavLink, useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

import Paths from "../../../routing/Paths";

import styles from "./styles.module.scss";

interface MenuModalProps {
  isModalOpen: boolean;
  handleModal: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal = ({
  isModalOpen,
  handleModal,
  setIsModalOpen,
}: MenuModalProps) => {
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    navigate(Paths.value);
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      className={styles.modal}
    >
      <RxCross2 onClick={handleModal} className={styles.close} />
      <nav>
        <NavLink
          to={Paths.ABOUT}
          onClick={() => handleNavigate("ABOUT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          About
        </NavLink>
        <NavLink
          to={Paths.SERVICES}
          onClick={() => handleNavigate("SERVICES")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to={Paths.PORTFOLIO}
          onClick={() => handleNavigate("PORTFOLIO")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to={Paths.CONTACT}
          onClick={() => handleNavigate("CONTACT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
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
    </Modal>
  );
};
export default MenuModal;
