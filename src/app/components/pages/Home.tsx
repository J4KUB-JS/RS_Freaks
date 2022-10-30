import { BackgroundText } from "../pages-components/BackGroundText";
import { CTASection } from "../pages-components/CTASection";
import { Headline } from "../pages-components/Headline";
import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { ImageVertical } from "../pages-components/ImageVertical";
import { TextGroup } from "../pages-components/TextGroup";

export const Home = () => {
  return (
    <>
      <main>
        <section className="headlineSection">
          <Headline
            additionalClass="HeadlineAdditional"
            variant="main"
            heading="RS Freaks"
            subHeading="Drive and don't look back"
          />
          <ImageHorizontal
            imgSrc="yellow-supra"
            altText="yellow toyota supra next to gas station"
          />
        </section>

        <section className="introductionSection">
          <BackgroundText
            additionalClass="BGTextAdditional"
            variant="medium"
            text="Tires & Smoke"
          />
          <div className="imgWithText">
            <TextGroup
              additionalClass="TGAdditional"
              title="Let's talk cars"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus cras purus, dui. Sed lacus pretium sit risus, amet. Sit tincidunt eget auctor aliquam viverra vulputate eget."
              CTAText="More about us"
              linkToAction="About"
            />
            <ImageVertical imgSrc="orange-porsche" altText="orange porsche" />
          </div>
        </section>

        <section className="introductionSection">
          <BackgroundText
            additionalClass="BGTextAdditionalTwo"
            variant="small"
            text="More power"
          />
          <div className="imgWithText">
            <ImageVertical imgSrc="porsches" altText="orange porsche" />
            <TextGroup
              additionalClass="TGAdditional"
              title="Driving with passion"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus cras purus, dui. Sed lacus pretium sit risus, amet. Sit tincidunt eget auctor aliquam viverra vulputate eget."
              CTAText="Cars in Club"
              linkToAction="About"
            />
          </div>
        </section>

        <section className="callToActionSection">
          <CTASection />
        </section>
      </main>
      <ImageHorizontal 
      additionalClass="cta-image" imgSrc="car-meet" altText="3 cars in line" />
    </>
  );
};
