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
        <TextGroup
          title="Cars are what maters"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
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
            title="Audi rs3"     
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
            spec={["I5 2.5L", "430", "400", "1570"]}
          />
          <BackgroundText
            additionalClass="BGTextAdditional"
            variant="big"
            text="RS 3"
          />
        </div>
      </div>

      <div className="carDescriptionOne">
        <div className="description">
          <TextGroup
            additionalClass="TGAdditionalOne"
            title="Porsche 911"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pharetra neque, amet pharetra. Turpis quis magna id iaculis at feugiat donec. Tincidunt viverra eu odio ut pulvinar mattis nibh suscipit vitae. Porta nunc sit habitant faucibus. Porta aliquet dolor ipsum sed. Morbi sapien, sed rutrum posuere morbi diam quis ante."
            spec={["F6 3.0L", "432", "510", "1670"]}
          />
          <BackgroundText
            additionalClass="BGTextAdditional"
            variant="big"
            text="911"
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
