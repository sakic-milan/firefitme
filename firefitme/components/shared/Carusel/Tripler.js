import React from "react";
import styles from "./styles.module.scss";
import ThirdCard from "./ThirdCard";

function Tripler({ threeArticles }) {
  return (
    <div className={styles.triplerWrapper}>
      {threeArticles.map(({ img, title, snipet }) => (
        <ThirdCard imgSrc={img} title={title} pret={snipet} />
      ))}
    </div>
  );
}

export default Tripler;
