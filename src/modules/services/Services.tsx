import { useState } from "react";
import styles from "./styles.module.scss";

const Services = () => {
  const [activeLink, setActiveLink] = useState("hotely-supply");

  const handleScrollToContainer = (containerId: string) => {
    setActiveLink(containerId);
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles["services-nav"]}>
        <a
          onClick={() => handleScrollToContainer("hotel-supply")}
          className={
            activeLink === "hotel-supply"
              ? styles["active-nav-link"]
              : styles["nav-link"]
          }
        >
          Hotel Supply & Turnkey Projects
        </a>
        <a
          onClick={() => handleScrollToContainer("bespoke-manufacturing")}
          className={
            activeLink === "bespoke-manufacturing"
              ? styles["active-nav-link"]
              : styles["nav-link"]
          }
        >
          Bespoke Manufacturing
        </a>
        <a
          onClick={() => handleScrollToContainer("procurement")}
          className={
            activeLink === "procurement"
              ? styles["active-nav-link"]
              : styles["nav-link"]
          }
        >
          Procurement
        </a>
        <a
          onClick={() => handleScrollToContainer("project-management")}
          className={
            activeLink === "project-management"
              ? styles["active-nav-link"]
              : styles["nav-link"]
          }
        >
          Project Management
        </a>
        <a
          onClick={() => handleScrollToContainer("procurement-advisory")}
          className={
            activeLink === "procurement-advisory"
              ? styles["active-nav-link"]
              : styles["nav-link"]
          }
        >
          Procurement Advisory Services
        </a>
      </div>
      <div className={styles.subcontainer} id="hotel-supply">
        <h3 className={styles.subtitle}>Hotel Supply and Turnkey Projects</h3>
        <p className={styles.body}>
          For more than 10 years, SGT has furnished and provided operational
          list for hotels worldwide. restaurants, resorts, cruise ships and
          subcontractors of the hospitality branch.
        </p>
        <p className={styles.body}>
          SGT is an international supplier of a wide range of hospitality
          products and equipment for hotels, restaurants, resorts, cruise ships
          and subcontractors of the hospitality branch.
        </p>
        <p className={styles.body}>
          SGT can Manage Procurement For Hospitality Projects, Major Renovations
          and Capital Expenditure Programs.
        </p>
        <p className={styles.body}>
          While designing or renovating your asset, SGT experts will masterfully
          walk you through the whole procedure with an exceptional attention to
          detail throughout. SGT will take the lead to best accomplish your
          plans and you new or renovated asset is turnkey and ready for you.
          With SGT as your purchasing agent, you can save time and money, and
          reduce expenses, while benefiting from our knowledge of the industry,
          purchasing experience and purchasing power.
        </p>
        <p className={styles.body}>
          SGT is Design and equipment supplier as well as a procurement company
          for the hospitality industry. And the private sector, Supplying FF&E
          (furniture, fixtures and equipment), OS&E (operating supplies and
          equipment) and construction materials (marble, ceramics, sanitary
          items, etc.) for new hotel developments and hotel renovations Operates
          from it head quarter in Istanbul, Turkey and, where necessary, from
          site offices at project sites.
        </p>
      </div>
      <div className={styles.subcontainer} id="bespoke-manufacturing">
        <h3 className={styles.subtitle}>Bespoke Manufacturing</h3>
        <p className={styles.body}>
          SGT manufactures custom-made goods in Italy, Turkey, and China, and
          sources shelf items from countries all over the world. Bespoke product
          manufacturing requires attention to detail and a clear understanding
          of the product the client needs to complete their project. SGT works
          closely with its clients and suppliers to deliver the client’s vision
          with accuracy and value.
        </p>
      </div>
      <div className={styles.subcontainer} id="procurement">
        <h3 className={styles.subtitle}>Procurement</h3>
        <p className={styles.body}>
          During the last four decades SGT has established firm business
          relations with manufacturers around the world, enabling it to offer
          its clients saving on all FF&E, OS&E and on a wide range of
          construction materials. SGT has experienced project managers and
          procurement agents utilizing an extensive database of FF&E, OS&E and
          construction materials. These same procurement experts regularly visit
          leading exhibitions and conferences to create new business contacts
          and remain current with the leading trends and innovations in the
          industry. SGT is able to offer its clients buying power and direct
          relationships with manufacturers in the industry based on a long
          history of manufacturing and procurement.
        </p>
      </div>
      <div className={styles.subcontainer} id="project-management">
        <h3 className={styles.subtitle}>Project Management</h3>
        <p className={styles.body}>
          SGT involves itself with every detail, from the initial meetings to
          the final walk through, providing the customer with personalized
          attention to detail. The company is dedicated to keeping the highest
          standards of quality and design, as specified by our or your
          architects and interior designers, while providing the most
          competitive prices. As project managers, we understand the importance
          of managing your project deliverables, your budget and your
          expectations.
        </p>
      </div>
      <div className={styles.subcontainer} id="procurement-advisory">
        <h3 className={styles.subtitle}>Procurement Advisory Services</h3>
        <p className={styles.body}>
          SGT can also help projects reduce overhead costs by providing
          procurement management and different purchasing services, including
          budget development, tender management, budget monitoring, planning,
          supplier performance measurement, purchasing audits, and price
          comparisons. SGT is able to take care of all client requirements,
          guaranteeing value for money and the finest of service.
        </p>
      </div>
    </div>
  );
};
export default Services;
