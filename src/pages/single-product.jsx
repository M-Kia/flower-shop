import SingleProduct from "../components/SingleProduct";

export default function SingleProductPage({ data }) {
  return <SingleProduct data={data} />;
}

export async function getServerSideProps(context) {
  const data = await axios.get("/api/all-products").then((res) => res.data);

  return {
    props: { data },
  };
}
