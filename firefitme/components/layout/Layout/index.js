import NavBar from "../Navbar";
import VideoBackground from "../VideoBackground";
import styles from "./styles.module.scss";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />

      {/* <VideoBackground /> */}
      <div className={styles.childrenContainer}>{children}</div>
      <div>Promotional offer</div>
    </>
  );
};

export default Layout;
