import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BackgroundText } from "../components/BackGroudText/BackGroundText";
import { Headline } from "../components/HeadLines/Headline";
import { Calendar } from "../components/Calendar/Calendar";
import { CalendarDateCard } from "../components/Calendar/CalendarDateCard";
import { ImageVertical } from "../components/ImageWrapper/ImageVertical";
import { CalendarHeading } from "../components/Calendar/CalendarHeading";

export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentMonth = useSelector(
    (state: RootState) => state.event.value.currentMonth
  );
  const currentShownEvents = useSelector(
    (state: RootState) => state.event.value.currentShownEvents
  );

  return (
    <main>
      <div className="section">
        <div className="calendarLeftSide">
          <Headline
            additionalClass="headlineAdditional"
            variant="section"
            heading="Calendar"
            subHeading="Don’t aks just get in the car and see you on the spot"
          />
          <Calendar />
        </div>

        <ImageVertical
          additionalClass="additionalImgVertical"
          imgSrc="orange-porsche"
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
          monthName={currentMonth}
        />
        <div className="prevEventsCalendar">
          {currentShownEvents.map((event) => (
            <CalendarDateCard
              key={event.id}
              date={event.date}
              text={event.eventName}
              imgSrc={event.img}
            />
          ))}
        </div>
      </div>
      <BackgroundText text="Our memories" variant="small" />
    </main>
  );
};
