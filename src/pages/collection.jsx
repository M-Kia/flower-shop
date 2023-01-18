import Collection from "../components/Collection";
import cactusCover from "../assets/images/cactusCover.jpg";
import plantCover from "../assets/images/plantCover.jpg";
import succulentCover from "../assets/images/succulentCover.jpg";
import allCover from "../assets/images/allCover.jpg";

export default function CollectionPage() {
  return <Collection />;
}

export async function getServerSideProps() {
  //محصولاتش از صفحه index میاد؟
  const data = {
    headerAll: allCover.src,
    headerCactus: cactusCover.src,
    headerPlant: plantCover.src,
    headerSucculent: succulentCover.src,
  };

  return {
    props: { data },
  };
}
