
import LatestCommercialProperties from "@/components/LatestCommercialProperties/LatestCommercialProperties";
import LatestProperties from "@/components/LatestProperties/LatestProperties";
import PageSearch from "@/components/PageSearch/PageSearch";
import Reviews from "@/components/Reviews/Reviews";

const Home = async () => {

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