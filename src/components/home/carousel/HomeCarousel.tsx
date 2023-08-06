import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.scss";

const imagesAndTitles = [
  {
    imgUrl: "/images/portfolio/public-area.webp",
    title: "Public Areas",
  },
  {
    imgUrl: "/images/portfolio/restaurant.webp",
    title: "Restaurant",
  },
  {
    imgUrl: "/images/portfolio/guestroom.webp",
    title: "Guestroom",
  },
];

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {imagesAndTitles.map((item, index) => (
          <div key={index} className={styles["carousel-item"]}>
            <img src={item.imgUrl} alt={item.title} className={styles.img} />
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
