import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ isDefault, isGradient, isBlack, isGreen, title }) => (
  <div
    className={classNames(
      styles.button,
      isDefault ? styles.default : "",
      isGradient ? styles.gradient : "",
      isBlack ? styles.black : "",
      isGreen ? styles.green : ""
    )}
  >
    {title}
  </div>
);

export default Button;
