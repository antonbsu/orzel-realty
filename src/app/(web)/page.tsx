
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import LatestSalesProperties from "@/components/LatestSalesProperties/LatestSalesProperties";
import NewsComponent from "@/components/NewsComponent/NewsComponent";
import PageSearch from "@/components/PageSearch/PageSearch";
import WorkSection from "@/components/WorkSection/WorkSection";

const Home = async () => {

  return (
    <>
      <PageSearch />
      <LatestSalesProperties />
      <NewsComponent />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </>
  )
}

export default Home;