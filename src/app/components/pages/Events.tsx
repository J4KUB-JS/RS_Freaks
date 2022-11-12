import { useEffect } from "react";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { TextGroup } from "../pages-components/TextGroup";

export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="section">
        <TextGroup
          title="Coming Sooner than forum"
          text=""
          linkToAction="Home"
        />
        <ImageHorizontal imgSrc="audi-snow" altText="audi" />
      </div>
    </main>
  );
};
