import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThirdCard from "./ThirdCard";
import Tripler from "./Tripler";

function Carusel() {
  const { cItems, setCItems } = useState([]);
  const { slide, setSlide } = useState(0);

  const article = {
    title: "Some test article",
    img:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    snipet:
      "Here areours prev of top ten excercise how to grow your biceps and triceps gains and so more inside here.",
  };

  const arr = [1, 2, 3];

  return (
    <div className={styles.cContainer}>
      <Tripler threeArticles={[article, article, article]} />
      {/* <Tripler threeArticles={[article, article, article]} />
      <Tripler threeArticles={[article, article, article]} />
      <Tripler threeArticles={[article, article, article]} /> */}
    </div>
  );
}

export default Carusel;
