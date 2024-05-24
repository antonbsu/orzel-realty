import React from 'react'
import { Metadata } from "next";
import styles from "../../PageStyles.module.scss";

// Dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Polityka prywatności | Orzeł Realty`,
    description: `Polityka prywatności Orzeł Realty. Dowiedz się jakie dane osobowe przetwarzamy i w jaki sposób.`,
  };
}

const PolicyPage = () => {
  return (
    <section className={styles.propertiesSection}>
      <div className="container">
        <h1 className='h2'>Polityka prywatności</h1>
        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">WPROWADZENIE</h2>
        <p>
          Niniejsza polityka prywatności (dalej „Polityka”) ma na celu poinformowanie użytkowników serwisu (dalej „Użytkownik serwisu” lub „Użytkownicy serwisu”) o sposobie, w jaki [Anton Schikno] (dalej „my”, „nas”) zbiera, wykorzystuje, przechowuje i chroni informacje osobiste uzyskane za pośrednictwem naszej strony [https://www.orzel-realty.pl/], jak również informacje uzyskane podczas rozmów telefonicznych z naszymi działami wsparcia.
        </p>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">ZBIERANIE INFORMACJI</h2>
        <p>Zbieramy informacje, gdy Użytkownik serwisu korzysta z naszej strony lub kontaktuje się z nami telefonicznie, w tym:</p>
        <ul
          className="ml-10 py-5 space-y-5"
        >
          <li className="list-disc">Dane osobowe: imię, dane kontaktowe, adres e-mail itp., podawane dobrowolnie przez Użytkownika serwisu podczas rejestracji, subskrypcji biuletynu, wypełniania formularzy kontaktowych lub podczas rozmowy telefonicznej.</li>
          <li className="list-disc">Dane dotyczące korzystania z serwisu i rozmów telefonicznych: informacje o tym, jak Użytkownik serwisu korzysta z naszej strony, w tym dane o wizytach, przeglądanych stronach, wykonanych działaniach, a także nagrania rozmów telefonicznych w celu poprawy jakości obsługi klienta i szkolenia personelu.</li>
        </ul>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">WYKORZYSTANIE INFORMACJI</h2>
        <p>Zebrane informacje wykorzystujemy w następujących celach:</p>
        <ul className="ml-10 py-5 space-y-5">
          <li className="list-disc">Dla poprawy jakości naszej strony, usług i obsługi klienta.</li>
          <li className="list-disc">Dla personalizacji doświadczenia użytkowania serwisu i poprawy komunikacji z Użytkownikami serwisu.</li>
          <li className="list-disc">Dla przetwarzania transakcji lub zapytań, w tym wykorzystania informacji uzyskanych podczas rozmów telefonicznych.</li>
          <li className="list-disc">Dla wysyłania okresowych e-maili i informacji dotyczących zapytań lub zamówień Użytkownika serwisu.</li>
        </ul>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">OCHRONA INFORMACJI</h2>
        <p>Podejmujemy środki w celu ochrony informacji osobistych Użytkownika serwisu:</p>
        <ul className="ml-10 py-5 space-y-5">
          <li className="list-disc">Szyfrowanie danych podczas ich przesyłania.</li>
          <li className="list-disc">Ograniczony dostęp do danych osobowych dla pracowników.</li>
          <li className="list-disc">Regularne kontrole naszych systemów pod kątem zgodności ze standardami bezpieczeństwa.</li>
          <li className="list-disc">Nagrania rozmów telefonicznych są przechowywane w zaszyfrowanej formie, a dostęp do nich jest ściśle kontrolowany.</li>
        </ul>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">UDOSTĘPNIANIE INFORMACJI OSOBOM TRZECIM</h2>
        <p>
          Nie sprzedajemy, nie wymieniamy i nie przekazujemy danych osobowych Użytkowników serwisu osobom trzecim bez ich zgody, z wyjątkiem przypadków niezbędnych do świadczenia usługi lub realizacji zapytania.
        </p>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">ZMIANY W POLITYCE PRYWATNOŚCI</h2>
        <p>
          Wszelkie zmiany naszej polityki prywatności będą publikowane na tej stronie. Polityka została ostatnio zaktualizowana [21.09.2022].
        </p>

        <h2 className="text-3xl mt-10 mb-5 font-bold text-[#25064D]">INFORMACJE KONTAKTOWE</h2>
        <p className='mb-2'>
          Jeśli Użytkownicy serwisu mają pytania dotyczące tej polityki prywatności lub nagrań rozmów telefonicznych, mogą się z nami skontaktować, korzystając z poniższych informacji: +48 667 240 191.
        </p>
        <p className='mb-2'>Cenimy zaufanie Użytkowników serwisu i dążymy do ochrony ich informacji osobistych z największą starannością i uwagą, włączając w to poufność ich rozmów telefonicznych.</p>
      </div>
    </section>
  )
}

export default PolicyPage