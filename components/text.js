import { css } from "../styled-system/css";
export const Paragraph = ({ children }) => {
  return (
    <p className={css({ fontSize: "1xl", marginBottom: '0.5em', maxWidth: "1000px" })}>
        {children}
    </p>
  );
};

export const HeadingSmall = ({ children }) => {
    return <h2 className={css({ fontSize: "2xl", marginBottom: '0.5em', marginTop: '0.5em', fontWeight: "bold" })}>
      {children}
  </h2>
}
