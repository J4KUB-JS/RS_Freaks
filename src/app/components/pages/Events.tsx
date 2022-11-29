import { useEffect } from "react";
import { BackgroundText } from "../pages-components/BackGroundText";
import { Calendar } from "../pages-components/Calendar";
import { CalendarDateCard } from "../pages-components/CalendarDateCard";
import { CalendarHeading } from "../pages-components/CalendarHeading";
import { Headline } from "../pages-components/Headline";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { ImageVertical } from "../pages-components/ImageVertical";

export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="section">
        <div className="calendarLeftSide">
          <Headline
            additionalClass="headlineAdditional"
            variant="section"
            heading="Calendar"
            subHeading="Don’t aks JUSt GEt in the car and see you there"
          />
          <Calendar />
        </div>

        <ImageVertical
          additionalClass="additionalImgVertical"
          imgSrc="orange-porsche"
          altText="porsche"
        />
        <ImageHorizontal
          additionalClass="additionalImgHorizontal"
          imgSrc="audi"
          altText="porsche"
        />
      </div>
      <BackgroundText
        additionalClass="BGTextAdditional"
        text="Don't miss it"
        variant="small"
      />
      <div className="prevEventsSection">
        <CalendarHeading
          subHeading="previous events"
          variant="slider"
          monthName={"September"}
        />
        <div className="prevEventsCalendar">
          <CalendarDateCard
            date={"01"}
            text="some text"
            imgSrc="mercedes-amg"
          />
          <CalendarDateCard date={"18"} text="some text" imgSrc="bmw-m2" />
          <CalendarDateCard date={"26"} text="some text" imgSrc="audi-s5" />
        </div>
      </div>
      <BackgroundText text="Our memories" variant="small" />
    </main>
  );
};
