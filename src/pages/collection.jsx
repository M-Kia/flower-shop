import Collection from "../Front/components/Collection";
import cactusCover from "../Front/assets/images/cactusCover.jpg";
import plantCover from "../Front/assets/images/plantCover.jpg";
import succulentCover from "../Front/assets/images/succulentCover.jpg";
import allCover from "../Front/assets/images/allCover.jpg";

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
