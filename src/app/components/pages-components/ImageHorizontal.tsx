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
  console.log(imgSrc);
  return (
    <div className={"imgContainerH " + additionalClass}>
      <img
        className="image--horizontal"
        src={require("../../../images/" + imgSrc + ".jpg")}
        alt={altText}
      />
    </div>
  );
};
