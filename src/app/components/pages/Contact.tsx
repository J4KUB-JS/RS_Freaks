import { useEffect } from "react";
import { ImageVertical } from "../pages-components/ImageVertical";
import { TextGroup } from "../pages-components/TextGroup";
import { TextGroupSmall } from "../pages-components/TextGroupSmall";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="contactSection">
        <div>
          <TextGroup
            title="contact"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus cras purus, dui. Sed lacus pretium sit risus, amet."
          />
          <div className="contactDetails">
            <TextGroupSmall label="Email" text="re.freaks@mail.com" />
            <TextGroupSmall label="Phone" text="+43 234 423 412" />
            <TextGroupSmall
              label="Address"
              text="SomeStreet 32/1 65-314 New York"
            />
            <TextGroupSmall label="Social media" text="FB IG YT" />
          </div>
        </div>

        <ImageVertical
          additionalClass="additionalIMG"
          imgSrc="porscheGT"
          altText="porsche"
        />
      </div>
    </main>
  );
};
