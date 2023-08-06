import Modal from "react-modal";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import styles from "./styles.module.scss";

interface ProjectModalProps {
  isModalOpen: boolean;
  handleModal: () => void;
  heroImage: string;
  handleNext: () => void;
  handlePrev: () => void;
}
const ProjectModal = ({
  isModalOpen,
  handleModal,
  heroImage,
  handleNext,
  handlePrev,
}: ProjectModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      className={styles.modal}
    >
      <RxCross2 onClick={handleModal} className={styles.close} />
      <div className={styles["image-container"]}>
        <FaAngleLeft onClick={handlePrev} className={styles.prev} />
        <img src={heroImage} alt="project-image" className={styles.image} />
        <FaAngleRight onClick={handleNext} className={styles.next} />
      </div>
    </Modal>
  );
};
export default ProjectModal;
