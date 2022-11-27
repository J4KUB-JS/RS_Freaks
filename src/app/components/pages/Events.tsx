import { useEffect } from "react";
import { BackgroundText } from "../pages-components/BackGroundText";
import { Calendar } from "../pages-components/Calendar";
import { Headline } from "../pages-components/Headline";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { TextGroup } from "../pages-components/TextGroup";

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

        <ImageHorizontal imgSrc="orange-porsche" altText="porsche" />
      </div>
      <BackgroundText
        additionalClass="BGTextAdditional"
        text="Don't miss it"
        variant="small"
      />
    </main>
  );
};
