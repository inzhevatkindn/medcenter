import News from "../../components/News/News";
import styles from "./About.module.scss";
import Doctors from "./components/Doctors/Doctors";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Personal from "./components/Personal/Personal";
import Possibilities from "./components/Possibilities/Goals";
import Resources from "./components/Resources/Help";
import ServiceList from "./components/ServiceList/ServiceList";

const About = () => (
  <div className={styles.about_wrapper}>
    <Header />
    <Info />
    <ServiceList />
    <Resources />
    <Possibilities />
    <Personal />
    <Doctors />
    <News />
  </div>
);

export default About;
