import ContactForm from "../../components/contact-form/ContactForm";
import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Istanbul Office</h2>
      <address className={styles.address}>
        Gaziumurpaşa Sk. Balmumcu Plaza3 No:34/4 Balmumcu ISTANBUL / TURKEY
      </address>
      <p className={styles.phone}>+90 212 274 00 98</p>
      <p className={styles.subtitle}>
        You can also contact us by using this form:
      </p>
      <ContactForm />
    </div>
  );
};
export default Contact;
