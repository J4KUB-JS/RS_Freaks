interface ImageInterface {
  imgSrc: string;
  altText: string;
  additionalClass?: string;
}

export const ImageHorizontal = ({
  imgSrc,
  altText,
  additionalClass,
}: ImageInterface) => {
  return (
    <div className={"imgContainerH " + additionalClass}>
      <img
        className="image--horizontal"
        src={require("../../assets/images/" + imgSrc + ".jpg")}
        alt={altText}
      />
    </div>
  );
};
