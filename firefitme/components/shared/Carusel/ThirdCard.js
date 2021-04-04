import React from "react";
import styles from "./styles.module.scss";

function ThirdCard(props) {
  const { imgSrc, imgAlt, title, pret } = props;
  return (
    <div className={styles.thirdCardContainer}>
      <div className={styles.thirdCWrapper}>
        <img className={styles.thirdImg} src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.separator} />
      <div className={styles.postData}>
        <h2 className={styles.thirdPostTitle}>{title}</h2>
        <p className={styles.thirdPostPret}>{pret}</p>
      </div>
    </div>
  );
}

export default ThirdCard;
