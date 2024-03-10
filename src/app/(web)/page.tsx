
import LatestCommercialProperties from "@/components/LatestCommercialProperties/LatestCommercialProperties";
import LatestProperties from "@/components/LatestProperties/LatestProperties";
import LatestSalesProperties from "@/components/LatestSalesProperties/LatestSalesProperties";
import NewsComponent from "@/components/NewsComponent/NewsComponent";
import PageSearch from "@/components/PageSearch/PageSearch";
import Reviews from "@/components/Reviews/Reviews";

const Home = async () => {

  return (
    <>
      <PageSearch />
      <NewsComponent />
      <LatestSalesProperties />
      {/* <LatestProperties /> */}
      {/* <LatestCommercialProperties /> */}
      {/* <Reviews /> */}
    </>
  )
}

export default Home;