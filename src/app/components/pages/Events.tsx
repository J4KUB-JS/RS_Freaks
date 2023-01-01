import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BackgroundText } from "../pages-components/BackGroundText";
import { Calendar } from "../pages-components/Calendar";
import { CalendarDateCard } from "../pages-components/CalendarDateCard";
import { CalendarHeading } from "../pages-components/CalendarHeading";
import { Headline } from "../pages-components/Headline";
import { ImageVertical } from "../pages-components/ImageVertical";

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
