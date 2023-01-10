import { useEffect } from "react";
import { BackgroundText } from "../components/BackGroudText/BackGroundText";
import { Headline } from "../components/HeadLines/Headline";
import { ImageHorizontal } from "../components/ImageWrapper/ImageHorizontal";
import { ImageVertical } from "../components/ImageWrapper/ImageVertical";
import { TextGroup } from "../components/TextGroups/TextGroup";

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
        <div className="CTASection">
          <BackgroundText variant="medium" text="RS Club" />
          <div className="CTA-Headline">
            <div>See you on</div>
            <span>next meet</span>
            <div className="subText">
              Check out <u>upcoming events</u> in calendar
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
