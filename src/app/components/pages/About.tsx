import { ImageHorizontal } from "../pages-components/ImageHorizontal";
import { Headline } from "../pages-components/Headline";
import { BackgroundText } from "../pages-components/BackGroundText";
import { TextGroup } from "../pages-components/TextGroup";
import { ImageVertical } from "../pages-components/ImageVertical";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="headlineSection">
        <ImageHorizontal
          additionalClass="additionalHeadingImg"
          imgSrc="audi"
          altText="audi"
        />
        <Headline
          heading="Cars are what maters"
          subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
          variant="section"
        />
      </div>
      <div className="carDescriptionOne">
        <ImageVertical
          additionalClass="ImgAdditionalOne"
          imgSrc="audi-rs3"
          altText="orange porsche"
        />
        <div className="description">
          <TextGroup
            additionalClass="descriptionAdditional"
            title="Mike's audi rs3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
            spec="Engine: I5 2.5L, HP: 400, nm: 400, Weight: 1570 kg"
          />
          <BackgroundText variant="big" text="RS 3" />
        </div>
      </div>

      <div className="carDescriptionOne">
        <div className="description">
          <TextGroup
            additionalClass="TGAdditionalOne"
            title="Jacks Porsche 911"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
            spec="Engine: F6 3.0L, HP: 432, NM: 510, Weight: 1670 kg "
          />
          <BackgroundText
            additionalClass="BGTextAdditional"
            variant="big"
            text="RS 3"
          />
        </div>

        <ImageVertical
          additionalClass="ImgAdditionalOne"
          imgSrc="porsche-silver"
          altText="orange porsche"
        />
      </div>
    </main>
  );
};
