import styles from "./styles.module.scss";

import {
  TfiStatsUp,
  TfiSettings,
  TfiClipboard,
  TfiTruck,
} from "react-icons/tfi";
import { MdOutlineLanguage, MdGroups } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { RxCheckbox } from "react-icons/rx";
import { FaRegFlag } from "react-icons/fa6";
import { BiPencil } from "react-icons/bi";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.body}>
        SGT was founded in 2008 in Istanbul, Turkey.
      </p>
      <p className={styles.body}>
        Built on a foundation of practical experience and professional
        expertise, SGT has demands. Our success is based on success of our
        clients and through long term partnerships we take pride in providing
        excellent service through our team of experienced, qualified personnel.
        Also our international partner network allows us to meet the growing
        regional and industrial specific demands of our clients through enhanced
        capacity and expertise.
      </p>
      <p className={styles.body}>
        What's really makes us different from the others is the unique set up
        and support of our Creative, Technical and Engineering Divisions.
      </p>
      <div className={styles["sub-container"]}>
        <h3 className={styles.subtitle}>Added Value</h3>
        <div className={styles["added-value-icons-container"]}>
          <div className={styles["icon-container"]}>
            <TfiStatsUp className={styles.icon} />
            <p className={styles["icon-text"]}>Market Research & Analysis</p>
          </div>
          <div className={styles["icon-container"]}>
            <TfiSettings className={styles.icon} />
            <p className={styles["icon-text"]}>
              Technical Capabilities & Engineering
            </p>
          </div>
          <div className={styles["icon-container"]}>
            <TfiClipboard className={styles.icon} />
            <p className={styles["icon-text"]}>Reporting & Analysis</p>
          </div>
          <div className={styles["icon-container"]}>
            <TfiTruck className={styles.icon} />
            <p className={styles["icon-text"]}>Shipping & Logistics</p>
          </div>
          <div className={styles["icon-container"]}>
            <FaRegFlag className={styles.icon} />
            <p className={styles["icon-text"]}>Local Support</p>
          </div>
          <div className={styles["icon-container"]}>
            <LiaProjectDiagramSolid className={styles.icon} />
            <p className={styles["icon-text"]}>Product Development</p>
          </div>
          <div className={styles["icon-container"]}>
            <RxCheckbox className={styles.icon} />
            <p className={styles["icon-text"]}>Quality Control & Assurance</p>
          </div>
          <div className={styles["icon-container"]}>
            <MdOutlineLanguage className={styles.icon} />
            <p className={styles["icon-text"]}>Global Sourcing</p>
          </div>
          <div className={styles["icon-container"]}>
            <BiPencil className={styles.icon} />
            <p className={styles["icon-text"]}>Design & Design Support</p>
          </div>
          <div className={styles["icon-container"]}>
            <MdGroups className={styles.icon} />
            <p className={styles["icon-text"]}>Strong QA/QC Team</p>
          </div>
        </div>
      </div>
      <div className={styles["sub-container"]}>
        <h3 className={styles.subtitle}>Partner Network Locations</h3>
        <div className={styles["services-container"]}>
          <p className={styles["services-title"]}>
            EAB/ EAB Home/ EABF - Buying Service Activities
          </p>
          <div className={styles["countries-container"]}>
            <div className={styles["country-container"]}>
              <img
                alt="China"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg"
                className={styles.flag}
              />
              <p>China</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="India"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
                className={styles.flag}
              />
              <p>India</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="Israel"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IL.svg"
                className={styles.flag}
              />
              <p>Israel</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="Malaysia"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MY.svg"
                className={styles.flag}
              />
              <p>Malaysia</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="Sri Lanka"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/LK.svg"
                className={styles.flag}
              />
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className={styles["services-container"]}>
          <p className={styles["services-title"]}>
            Sourcing and Trading Activities
          </p>
          <div className={styles["countries-container"]}>
            <div className={styles["country-container"]}>
              <img
                alt="United States"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                className={styles.flag}
              />
              <p>U.S.A</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="Russia"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                className={styles.flag}
              />
              <p>Russia</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="Vietnam"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg"
                className={styles.flag}
              />
              <p>Vietnam</p>
            </div>
            <div className={styles["country-container"]}>
              <img
                alt="South Africa"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg"
                className={styles.flag}
              />
              <p>South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
