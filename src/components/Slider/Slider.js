import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowIcon from "../../assets/next_arrow.svg";
import PrevArrowIcon from "../../assets/prev_arrow.svg";
import classNames from "classnames";
import { useWindowSize } from "../../utils/useWindowSize";

const NewsSlider = () => {
  const { isMobile } = useWindowSize();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const newsItems = [
    {
      title: "Просто пример текста",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
      date: "22.11.2024",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
    {
      title: "Просто пример текста",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
      date: "22.11.2024",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
    {
      title: "Просто пример текста",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
      date: "22.11.2024",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
    // Repeat for more items...
  ];

  return (
    <div className={styles.newsSlider}>
      <h2>Наши новости</h2>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div className={styles.slide_container}>
              <div key={index} className={styles.slide}>
                <div className={styles.newsCard}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.newsImage}
                  />
                  <div className={styles.newsContent}>
                    <div className={styles.newsTitle}>{item.title}</div>
                    <div className={styles.newsDescription}>
                      {item.description}
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.newsFooter}>
                      <a href="#" className={styles.newsLink}>
                        Подробнее
                      </a>
                      <div className={styles.newsDate}>{item.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={classNames(styles.left_block, styles.block)}>
        <div className={styles.green} />
      </div>
      <div className={classNames(styles.right_block, styles.block)}>
        <div className={styles.green} />
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className={classNames(styles.arrow, styles.next_arrow)}
      onClick={onClick}
    >
      <NextArrowIcon />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={classNames(styles.arrow, styles.prev_arrow)}
      onClick={onClick}
    >
      <PrevArrowIcon />
    </div>
  );
};

export default NewsSlider;
