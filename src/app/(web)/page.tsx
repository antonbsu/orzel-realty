
import LatestCommercialProperties from "@/components/LatestCommercialProperties/LatestCommercialProperties";
import LatestProperties from "@/components/LatestProperties/LatestProperties";
import PageSearch from "@/components/PageSearch/PageSearch";
import Reviews from "@/components/Reviews/Reviews";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {

  const featuredRoom = await getFeaturedRoom();
  // console.log(featuredRoom);

  return (
    <>
      <PageSearch />
      <LatestProperties />
      <LatestCommercialProperties />
      <Reviews />
    </>
  )
}

export default Home;