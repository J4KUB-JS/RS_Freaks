interface HeadLineInterface {
  heading: string;
  subHeading: string;
  variant: "section" | "main";
}

export const Headline = ({
  heading,
  subHeading,
  variant,
}: HeadLineInterface) => {
  const [firstPart, SecondPart] = heading.split(" ");

  return (
    <div className="headline">
      {variant === "main" ? (
        <div className={variant + "-heading"}>
          <span className="firstPartHeading">{firstPart}</span>
          <span className="secondPartHeading">{SecondPart}</span>
        </div>
      ) : (
        <div className={variant + "-heading"}>{heading}</div>
      )}
      <div className={variant + "-subHeading"}>{subHeading}</div>
    </div>
  );
};
