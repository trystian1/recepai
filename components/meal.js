import Link from "next/link";
import { css } from "../styled-system/css";

const SpecificationLine = ({ children }) => {
  return (
    <p
      className={css({
        fontSize: "lg",
        lineClamp: "2",
        overflow: "hidden",
        boxOrient: "vertical",
        lineHeight: "tight",
        marginBottom: "0.5em",
      })}
    >
      {children}
    </p>
  );
};

export const MealCard = ({ meal, standAlone = false }) => {
  return (
    <Link href={`/recept/${meal.name}`}>
      <div
        className={css({
          width: standAlone ? "90%" : "300px",
          maxWidth: "1000px",
          marginLeft: standAlone ? "auto" : "inherit",
          marginRight: standAlone ? "auto" : "inherit",
          border: "1px solid grey",
          borderRadius: "10px",
          height: standAlone ? "auto" : "500px",
        })}
      >
        <img
          className={css({
            width: "100%",
            height: standAlone ? "auto" : "200px",
            maxWidth: '400px',
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          })}
          src={meal.image}
        />
        <div className={css({ padding: "10px" })} src={meal.image}>
          <h3
            className={css({
              fontSize: "2xl",
              fontWeight: "bold",
              lineClamp: "3",
              overflow: "hidden",
              boxOrient: "vertical",
              lineHeight: "tight",
              marginBottom: "0.25em",
            })}
          >
            {meal.name}
          </h3>
          <SpecificationLine>⏰ {meal.timeToPrepare}</SpecificationLine>
          <SpecificationLine>
            🍔{" "}
            {meal.calories.toLowerCase().includes("calo") ? "" : "Caloriëen:"}{" "}
            {meal.calories}
          </SpecificationLine>
          <SpecificationLine>🏷️ {meal.tags.join(", ")}</SpecificationLine>
          <SpecificationLine>👨‍👩‍👧‍👦 {meal.persons} Personen</SpecificationLine>
          {standAlone && meal.preparation.map((prep) => <p>{prep}</p>)}
        </div>
      </div>
    </Link>
  );
};
