import React from "react";
import HomePage from "../Front/components/HomePage";

import c1 from "../Front/assets/images/c1.webp";
import c2 from "../Front/assets/images/c2.webp";
import c3 from "../Front/assets/images/c3.webp";
import c4 from "../Front/assets/images/c4.webp";
import c5 from "../Front/assets/images/c5.webp";
import c6 from "../Front/assets/images/c6.webp";
import p1 from "../Front/assets/images/p1.webp";
import p2 from "../Front/assets/images/p2.webp";
import p3 from "../Front/assets/images/p3.webp";
import p4 from "../Front/assets/images/p4.webp";
import p5 from "../Front/assets/images/p5.webp";
import p6 from "../Front/assets/images/p6.webp";
import s1 from "../Front/assets/images/s1.webp";
import s2 from "../Front/assets/images/s2.webp";
import s3 from "../Front/assets/images/s3.webp";
import s4 from "../Front/assets/images/s4.webp";
import s5 from "../Front/assets/images/s5.webp";
import s6 from "../Front/assets/images/s6.webp";
import cactusCover from "../Front/assets/images/cactusCover.jpg";
import plantCover from "../Front/assets/images/plantCover.jpg";
import succulentCover from "../Front/assets/images/succulentCover.jpg";
import allCover from "../Front/assets/images/allCover.jpg";

export default function Home({ data }) {
  console.log(data);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export async function getServerSideProps() {
  const data = [
    {
      name: "product name",
      relatedCode: 1,
      code: 1,
      pictures: [{ value: c1.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 1,
      code: 2,
      pictures: [{ value: c2.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 1,
      code: 3,
      pictures: [{ value: c3.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 1,
      code: 4,
      pictures: [{ value: c4.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 1,
      code: 5,
      pictures: [{ value: c5.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 1,
      code: 6,
      pictures: [{ value: c6.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 7,
      pictures: [{ value: p1.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 8,
      pictures: [{ value: p2.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 9,
      pictures: [{ value: p3.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 10,
      pictures: [{ value: p4.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 11,
      pictures: [{ value: p5.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 2,
      code: 12,
      pictures: [{ value: p6.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },

    {
      name: "product name",
      relatedCode: 3,
      code: 13,
      pictures: [{ value: s1.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 3,
      code: 14,
      pictures: [{ value: s2.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 3,
      code: 15,
      pictures: [{ value: s3.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 3,
      code: 16,
      pictures: [{ value: s4.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 3,
      code: 17,
      pictures: [{ value: s5.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
    {
      name: "product name",
      relatedCode: 3,
      code: 18,
      pictures: [{ value: s6.src }],
      price: 30,
      discount: 10,
      stock: 20,
      order: false,
      favorite: false,
      productInfo:
        "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
    },
  ];

  return {
    props: { data },
  };
}
