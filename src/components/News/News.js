import classNames from "classnames";
import NewsSlider from "../Slider/Slider";
import styles from "./News.module.scss";

const News = () => (
  <div className={classNames(styles.wrapper, "hr_pd")}>
    <NewsSlider />
  </div>
);

export default News;
