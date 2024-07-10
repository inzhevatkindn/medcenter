import styles from "./Contact.module.scss";
import Map from "./Map/Map";
import Header from "./Header/Header";
import Data from "./Data/Data";

const Contact = () => (
  <div className={styles.container}>
    <Header />
    {/* <Map /> */}
    <Data />
  </div>
);

export default Contact;
