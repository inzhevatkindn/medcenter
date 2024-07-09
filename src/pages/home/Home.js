import News from "../../components/News/News";
import BelieveUs from "./components/BelieveUs/BelileveUs";
import Goals from "./components/Goals/Goals";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Info from "./components/Info/Info";
import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.home}>
    <Header />
    <Info />
    <Help />
    <Goals />
    <BelieveUs />
    <News />
  </div>
);

export default Home;
