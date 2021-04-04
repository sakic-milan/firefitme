import styles from "./styles.module.scss";
import Image from "next/image";
import MainMenu from "./MainMenu";
import Submenu from "./Submenu";

const NavBar = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image
              width={280}
              height={72}
              src="/assets/images/firefitmelogo.png"
            />
          </div>
          <MainMenu />
        </div>

        <Submenu />
      </div>
    </>
  );
};

export default NavBar;
