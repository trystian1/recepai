import Link from "next/link";
import Layout from "../components/layout";
import { MealCard } from "../components/meal";
import { HeadingSmall, Paragraph } from "../components/text";
import { css } from "../styled-system/css";

const Recommendations = ({ recommendations }) => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "flex-start",
        gap: "5",
        width: "100vw",
        overflow: "scroll",
      })}
    >
      {recommendations.map((recommendation) => (
        <MealCard meal={recommendation.meal} />
      ))}
    </div>
  );
};

export const AppBanner = () => {
  return (
    <>
      <div
        className={css({
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          marginTop: "1.5em",
          marginTop: "1.5em",
          padding: "10px",
        })}
      >
        <HeadingSmall>Download de app hier!</HeadingSmall>
        <Link href="https://apps.apple.com/nl/app/recepai/id6463718463">
          <div
            className={css({
              display: "flex",
              justifyContent: "flex-start",
              gap: "5",
              maxWidth: "80vw",
              marginTop: "0.5em",
              marginBottom: "0.5em",
              marginLeft: "0.5em",
            })}
          >
            <img
              className={css({
                maxWidth: "120px",
              })}
              src="/images/recepai.png"
            ></img>
            <div>
              <HeadingSmall>RecepAi</HeadingSmall>
              <p className={css({ fontSize: "lg" })}>
                Jouw week onze maaltijden
              </p>
            </div>
          </div>
          <p
            className={css({
              fontSize: "lg",
              marginLeft: "0.5em",
              color: "blue.600",
            })}
          >
            Naar de app store
          </p>
        </Link>
      </div>
    </>
  );
};

const AppVideo = () => {
  <video
    autoplay
    controls
    muted
    autoPlay={true}
    className={css({
      maxWidth: "400px",
    })}
  >
    <source src="/images/ingredients_recognizing.mp4" type="video/mp4" />
  </video>;
};
export default function Page(props) {
  return (
    <Layout home>
      <h1
        className={css({
          fontSize: "3xl",
          fontWeight: "bold",
          lineHeight: "tight",
          marginTop: "0.5em",
        })}
      >
        RecepAi, jouw Persoonlijke Chef met Kunstmatige Intelligentie
      </h1>
      <Paragraph>
        Een App gemaakt voor de Iphone, voor het genereren van gepersonaliseerde
        weekmenu's. Ontdek het Gemak van Maaltijdplanning met RecepAi Ben je het
        beu om elke dag na te denken over wat je moet eten? RecepAi maakt
        maaltijdplanning moeiteloos met behulp van kunstmatige intelligentie.
        Laat je verrassen door gepersonaliseerde weekmenu's, samengesteld op
        basis van jouw voorkeuren.
      </Paragraph>

      <HeadingSmall>Hier enkele recepten:</HeadingSmall>
      <Recommendations recommendations={props.recommendationsPart1} />
      <AppBanner />
      <AppVideo />
      <HeadingSmall>Nog meer recepten:</HeadingSmall>
      <Recommendations recommendations={props.recommendationsPart2} />
      <HeadingSmall>Belangrijkste Kenmerken:</HeadingSmall>

      <Paragraph>
        Slimme Maaltijdplanning: Krijg suggesties voor heerlijke recepten
        afgestemd op het aantal personen, keukencategorieën en
        moeilijkheidsgraad.
      </Paragraph>

      <Paragraph>
        Bewaar je Favorieten: RecepAi slaat al je favoriete recepten op, zodat
        je ze altijd gemakkelijk kunt terugvinden.
      </Paragraph>

      <Paragraph>
        Ontdek Nieuwe Smaken: Duik in de "discover" modus en ontdek creaties van
        andere gebruikers, en deel jouw culinaire meesterwerken.
      </Paragraph>

      <Paragraph>
        Voorkom Voedselverspilling: Maak gebruik van de unieke functie om
        resterende ingrediënten te fotograferen en laat RecepAi een smakelijk
        recept voor je genereren.
      </Paragraph>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://whattoeat-cc0b1.ew.r.appspot.com/recommendations`
  );
  const { recommendations, tags } = await response.json();
  console.log(recommendations.length);
  const recommendationsPart1 = recommendations.splice(0, 30);
  const recommendationsPart2 = recommendations.splice(30, 50);
  const recommendationsPart4 = recommendations.splice(50, 80);

  return {
    props: {
      recommendations,
      tags,
      recommendationsPart1,
      recommendationsPart2,
    },
  };
};
