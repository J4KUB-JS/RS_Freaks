interface CalendarHeadingInterface {
  monthName: string;
  subHeading?: string;
  variant: "slider" | "basic";
}

export const CalendarHeading = ({
  monthName,
  subHeading,
  variant,
}: CalendarHeadingInterface) => {
  return (
    <div className="dateWrapper">
      {subHeading !== undefined ? (
        <div className={variant === "slider" ? "subHeadingSlider" : "subHeading"}>{subHeading}</div>
      ) : null}
      {variant === "slider" ? <span className="arrow">&lt;</span> : null}
      <span className="monthName">{monthName}</span>
      {variant === "slider" ? <span className="arrow">&gt;</span> : null}
    </div>
  );
};
