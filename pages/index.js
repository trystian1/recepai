import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Recepai - privacy notice</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h1>Privacybeleid RecepAi-app</h1>
<p>
Dit privacybeleid beschrijft hoe RecepAi ("wij", "ons" of "onze") informatie verzamelt, gebruikt en deelt wanneer je onze app ("App") gebruikt. Door de App te gebruiken, stem je in met de voorwaarden in dit privacybeleid.
</p>
<h2>Informatie die we verzamelen</h2>
<p>
We verzamelen de volgende soorten informatie wanneer je onze App gebruikt:

<b></b>Accountinformatie: Als je een gebruikersaccount aanmaakt, verzamelen we je e-mailadres en wachtwoord om je in staat te stellen in te loggen en je recepten op te slaan.

<b></b>Receptinformatie: We slaan de recepten op die je in de App creëert en bewaart.

<b></b>Gebruiksgegevens: We verzamelen gegevens over hoe je de App gebruikt, zoals welke functies je gebruikt, de acties die je onderneemt, en de tijd die je besteedt aan de App.
</p>
<h2>Hoe we informatie gebruiken</h2>
<p>
We gebruiken de verzamelde informatie voor de volgende doeleinden:

Om je in staat te stellen een gebruikersaccount aan te maken en in te loggen.

Om de door jou gecreëerde en opgeslagen recepten op te slaan en te beheren.

Om de App te verbeteren en te optimaliseren, inclusief het begrijpen van hoe je de App gebruikt.

Om je te voorzien van updates, meldingen en ondersteuning met betrekking tot de App.

Delen van informatie

We delen je informatie niet met derden, behalve in de volgende gevallen:

Met je uitdrukkelijke toestemming.

Indien vereist door de wet of om te voldoen aan juridische verzoeken.

Jouw keuzes

Je kunt op elk moment toegang krijgen tot, bijwerken of verwijderen van je accountinformatie door de instellingen in de App te gebruiken. Als je je account wilt verwijderen, neem dan contact met ons op via trystian.offerman@gmail.com en we zullen je verzoek verwerken.
</p>


<h2>Hoe we informatie gebruiken</h2>
<p>
Als je vragen hebt over dit privacybeleid, neem dan contact met ons op via trystian.offerman@gmail.com.

Dit privacybeleid is voor het laatst bijgewerkt op 01-10-2023. We behouden ons het recht voor om dit privacybeleid op elk moment te wijzigen of bij te werken. Het is raadzaam om dit privacybeleid regelmatig te controleren voor eventuele wijzigingen.

</p>

      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
