import { Link } from "react-router-dom";

interface TextGroupInterface {
  title: string;
  text: string;
  spec?: string;
  CTAText?: string;
  linkToAction?: string;
  additionalClass?: string;
}

export const TextGroup = ({
  text,
  title,
  spec,
  CTAText,
  linkToAction,
  additionalClass,
}: TextGroupInterface) => {
  return (
    <div className={"textGroup " + additionalClass}>
      <div className="TextGroup-title">{title}</div>
      {spec !== undefined ? <div className="TextGroup-spec">{spec}</div> : null}
      <div className="TextGroup-text">{text}</div>
      {CTAText !== undefined ? (
        <Link className="TextGroup-actionBTN" to={"/" + linkToAction}>
          {CTAText} &gt;
        </Link>
      ) : null}
    </div>
  );
};
