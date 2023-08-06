import { FaRegCopyright } from "react-icons/fa6";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["copyright-container"]}>
        <FaRegCopyright className={styles["copyright-icon"]} />
        <p>2023 by SGT</p>
      </div>
      <div className={styles["developer-container"]}>
        <a
          href="https://www.linkedin.com/in/yigit-zarbun-732924107/"
          target="_blank"
          className={styles.developer}
        >
          Website by Yigit Zarbun
        </a>
      </div>
    </div>
  );
};
export default Footer;
