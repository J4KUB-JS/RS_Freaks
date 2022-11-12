import { useEffect } from "react";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { TextGroup } from "../pages-components/TextGroup";

export const Forum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="section">
        <TextGroup
          title="Coming Soon"
          text="You will be able to share progress on your car project and ask question when you face problem"
          CTAText="Go back to home"
          linkToAction="Home"
        />
        <ImageHorizontal imgSrc="audi-snow" altText="audi" />
      </div>
    </main>
  );
};
