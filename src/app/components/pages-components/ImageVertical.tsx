interface ImageInterface {
  imgSrc: string;
  altText: string;
  additionalClass?: string;
}

export const ImageVertical = ({
  imgSrc,
  altText,
  additionalClass,
}: ImageInterface) => {
  return (
    <div className={"imgContainerV  " + additionalClass}>
      <img
        className="image--vertical"
        src={require("../../../images/" + imgSrc + ".jpg")}
        alt={altText}
      />
    </div>
  );
};
