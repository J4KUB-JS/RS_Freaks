import { BackgroundText } from "./BackGroundText";

export const CTASection = () => {
  return (
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
  );
};
