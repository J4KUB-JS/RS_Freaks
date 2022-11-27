import { ImageVertical } from "./ImageVertical";

interface CalendarDateCardInterface {
  date: string;
  text: string;
  subText?: string;
  additionalClass?: string;
  imgSrc?: string;
}

export const CalendarDateCard = ({
  date,
  text,
  subText,
  additionalClass,
  imgSrc,
}: CalendarDateCardInterface) => {
  const specialGuest = subText !== undefined ? `(${subText})` : null;
  console.log(imgSrc);
  return (
    <div className={"dateCard " + additionalClass}>
      <div className="line"></div>
      <div className="eventDate">{date}</div>
      <div className="eventName">{text}</div>
      <div className="eventGuest">{specialGuest}</div>
      {imgSrc !== undefined ? (
        <ImageVertical imgSrc={imgSrc} altText="orange porsche" />
      ) : null}
    </div>
  );
};
