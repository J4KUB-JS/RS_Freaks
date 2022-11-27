interface CalendarDateCardInterface {
  date: number;
  text: string;
  subText?: string;
  additionalClass?: string;
}

export const CalendarDateCard = ({
  date,
  text,
  subText,
  additionalClass,
}: CalendarDateCardInterface) => {
  const specialGuest = subText !== undefined ? `(${subText})` : null;

  return (
    <div className={"dateCard " + additionalClass}>
      <div className="line"></div>
      <div className="eventDate">{date}</div>
      <div className="eventName">{text}</div>
      <div className="eventGuest">{specialGuest}</div>
    </div>
  );
};
