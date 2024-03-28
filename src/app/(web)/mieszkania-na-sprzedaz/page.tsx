import { Metadata } from "next";
import { getAllSalesPage } from "@/libs/apis";
import { Property } from "@/models/property";

import styles from "../../PageStyles.module.scss";
import LatestProperty from "@/components/LatestProperty/LatestProperty";
import ContactSectionProperties from "@/components/ContactSectionProperties/ContactSectionProperties";

export const metadata = {
  title: 'Nieruchomości na sprzedaż - Orzel Realty',
  description: 'Nieruchomości na sprzedaż w Orzel Realty. Znajdź swoje wymarzone mieszkanie lub dom w naszej ofercie. Skontaktuj się z nami już dziś!',
}

const AllSalePage = async () => {
  const salesProperty: Property[] = await getAllSalesPage();

  return (
    <>
      <section className={styles.propertiesSection}>
        <div className="container">
          <h2 className="h2">Nieruchomości na sprzedaż</h2>
          <div className={styles.salesPropertiesList}>
            {salesProperty.map((property) => (
              <div key={property._id} className={styles.salesPropertyItem}>
                <LatestProperty property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSectionProperties />
    </>
  );
}

export default AllSalePage;