import { CalendarDateCard } from "./CalendarDateCard";

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="dateWrapper">
        <div className="subHeading">Upcoming event</div>
        <div className="monthName">October</div>
      </div>
      <div className="calendarGrid">
        <CalendarDateCard date={4} text={"Night ride"} />
        <CalendarDateCard date={15} text={"Ostin Park"} />
        <CalendarDateCard date={20} text={"On road meet"} />
        <CalendarDateCard
          additionalClass="calendarCardAdditional"
          date={30}
          text={"Milers car Park"}
          subText={"special guest"}
        />
      </div>
    </div>
  );
};
