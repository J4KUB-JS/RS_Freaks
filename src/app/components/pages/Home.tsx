import { useEffect } from "react";
import { BackgroundText } from "../pages-components/BackGroundText";
import { CTASection } from "../pages-components/CTASection";
import { Headline } from "../pages-components/Headline";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { ImageVertical } from "../pages-components/ImageVertical";
import { TextGroup } from "../pages-components/TextGroup";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="headlineSection">
        <Headline
          additionalClass="HeadlineAdditional"
          variant="main"
          heading="RS Freaks"
          subHeading="Drive and don't look back"
        />
        <ImageHorizontal
          imgSrc="audi"
          altText="yellow toyota supra next to gas station"
        />
      </section>

      <section className="introductionSection">
        <BackgroundText
          additionalClass="BGTextAdditional"
          variant="medium"
          text="Tires & Smoke"
        />
        <TextGroup
          additionalClass="TGAdditionalOne"
          title="Let's talk cars"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus cras purus, dui. Sed lacus pretium sit risus, amet. Sit tincidunt eget auctor aliquam viverra vulputate eget."
          CTAText="More about us"
          linkToAction="About"
        />
        <ImageVertical
          additionalClass="ImgAdditionalOne"
          imgSrc="orange-porsche"
          altText="orange porsche"
        />
      </section>

      <section className="introductionSection">
        <BackgroundText
          additionalClass="BGTextAdditionalTwo"
          variant="small"
          text="More power"
        />
        <ImageVertical
          additionalClass="ImgAdditionalTwo"
          imgSrc="porsches"
          altText="orange porsche"
        />
        <TextGroup
          additionalClass="TGAdditionalTwo"
          title="What we drive"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus cras purus, dui. Sed lacus pretium sit risus, amet. Sit tincidunt eget auctor aliquam viverra vulputate eget."
          CTAText="Cars in Club"
          linkToAction="About"
        />
      </section>

      <section className="callToActionSection">
        <CTASection />

        {/* <ImageHorizontal
          additionalClass="cta-image"
          imgSrc="car-meet"
          altText="3 cars in line"
        /> */}
      </section>
    </main>
  );
};
