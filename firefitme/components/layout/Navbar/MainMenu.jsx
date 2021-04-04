import Link from "next/link";
import styles from "./styles.module.scss";

const MainMenu = () => {
  const PAGES = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    { name: "Download", path: "/download" },

    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className={styles.navMainMenu}>
      <ul className={styles.navList}>
        {PAGES.map((page, index) => {
          return (
            <li className={styles.navItem}>
              <Link href={page.path}>
                <a>{page.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
