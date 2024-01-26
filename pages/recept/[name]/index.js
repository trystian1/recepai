import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Layout from "../../../components/layout";
import { MealCard } from "../../../components/meal";
import { css } from "../../../styled-system/css";
import { AppBanner, Recommendations } from "../..";
import { HeadingSmall, Paragraph } from "../../../components/text";

const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_KEY,
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://whattoeat-cc0b1-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "gs://whattoeat-cc0b1.appspot.com",
};
const fireBaseApp = initializeApp(firebaseConfig);

export default function Page({recommendations, ...props}) {
  return (
    <Layout home>
      <div
        className={css({
          paddingTop: "2em",
          marginBottom: "2em",
          marginLeft: "auto",
          marginRight: "auto",
        })}
      >
        <MealCard meal={props} standAlone={true} />
        <HeadingSmall>Bekijk deze ook:</HeadingSmall>
        <Recommendations recommendations={recommendations} />
        <TextSection />
      </div>
    </Layout>
  );
}

export const TextSection = () => {
  return (
    <>
      <HeadingSmall>Ontdek Meer Heerlijke Recepten met RecepAi</HeadingSmall>
      <Paragraph>
        Wil je meer culinaire inspiratie? RecepAi heeft een schat aan smakelijke
        recepten die perfect passen bij jouw voorkeuren. Laat je verrassen door
        onze kunstmatige intelligentie en ontdek nieuwe gerechten om je
        kookrepertoire uit te breiden.
      </Paragraph>

      <HeadingSmall>Waarom Kiezen Voor RecepAi?</HeadingSmall>
      <ul>
        <Paragraph>
          🍽️ Gepersonaliseerd: Onze recepten zijn afgestemd op jouw smaak en
          voorkeuren.
        </Paragraph>

        <Paragraph>
          🌐 Wereldse Keukens: Ontdek gerechten uit verschillende keukens en
          culturen.
        </Paragraph>

        <Paragraph>
          📱 Gemakkelijk te Volgen: Stapsgewijze instructies maken koken
          eenvoudig en plezierig.
        </Paragraph>

        <Paragraph>
          🌱 Voedzaam en Smakelijk: Combineer gezondheid en smaak in één
          gerecht.
        </Paragraph>
      </ul>

      <Paragraph>Probeer Dit Recept en Laat Je Smaakpapillen Dansen</Paragraph>

      <Paragraph>
        Ontdek meer verrukkelijke recepten en maak van elke maaltijd een feest
        met RecepAi. Download de app vandaag nog en beleef een culinaire reis
        vol creativiteit en smaak!
      </Paragraph>

      <AppBanner />
    </>
  );
};

export const getMeal = async (name) => {
  const auth = getAuth(fireBaseApp);
  return await signInWithEmailAndPassword(
    auth,
    process.env.AUTH_EMAIL,
    process.env.AUTH_PASSWORD
  ).then(async () => {
    const dbRef = ref(getDatabase(fireBaseApp));
    try {
      const snapshot = await get(child(dbRef, `meals/${name}`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("No data");
    }
  });
};

export const getServerSideProps = async (context) => {
  const { name } = context.params;
  let recommendationsToDisplay = []
  const response = await fetch(`https://whattoeat-cc0b1.ew.r.appspot.com/recommendations-for-meal?mealName=${name}`);
  console.log(response)
  try { 
    const { recommendations } = await response.json();
    recommendationsToDisplay = recommendations.splice(0, 10)
  } catch {
    
  }
  const res = await getMeal(name);
  console.log(res);
  return { props: { recommendations: recommendationsToDisplay, ...res } };
};
