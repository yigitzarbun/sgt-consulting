import { useState } from "react";
import styles from "./styles.module.scss";
import ProjectModal from "../project-modal/ProjectModal";

interface ProjectCarouselProps {
  images: string[];
}
const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [index, setIndex] = useState(0);

  const heroImage = images.filter((image) => image !== null)[index];

  const handleHero = (value: number) => {
    setIndex(value);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles["project-carousel"]}>
      <img
        src={heroImage}
        alt="project-image"
        className={styles["cover-image"]}
        onClick={handleModal}
      />
      <div className={styles["thumbnail-container"]}>
        {images
          .filter((image) => image !== null)
          .map((item, index) => (
            <div
              key={index}
              className={styles.thumbnail}
              onClick={() => handleHero(index)}
            >
              <img src={item} alt={item} className={styles.img} />
            </div>
          ))}
      </div>
      <ProjectModal
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        heroImage={heroImage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default ProjectCarousel;
