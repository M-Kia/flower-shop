import SingleProduct from "../Front/components/SingleProduct";
import c1 from "../Front/assets/images/c1.webp";

export default function SingleProductPage() {
  return <SingleProduct />;
}

export async function getServerSideProps() {
  //دیتاش به این شکله ولی باید وقتی تک محصول کلیک میشه اون رو بگیره
  // اینی که اینجا نوشتم استاتیکه
  const data = {
    name: "product name",
    relatedCode: 1,
    code: 1,
    pictures: [{ value: c1.src }, { value: c1.src }, { value: c1.src }],
    price: 30,
    discount: 10,
    stock: 20,
    order: false,
    favorite: false,
    productInfo:
      "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
  };

  return {
    props: { data },
  };
}
