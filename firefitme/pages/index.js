import Head from "next/head";
import Layout from "../components/layout/Layout";
import React from "react";
import Carusel from "@/components/shared/Carusel";
import ThirdCard from "@/components/shared/Carusel/ThirdCard";

export default function Home() {
  const article = {
    title: "Some test article",
    img:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    snipet:
      "Here areours prev of top ten excercise how to grow your biceps and triceps gains and so more inside here.",
  };
  return (
    <Layout>
      {/* <ThirdCard
        imgSrc={article.img}
        title={article.title}
        pret={article.snipet}
      /> */}
      <Carusel />
      <p>
        1It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>

      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </Layout>
  );
}
