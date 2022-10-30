interface ImageInterface {
  imgSrc: string;
  altText: string;
}

export const ImageVertical = ({ imgSrc, altText }: ImageInterface) => {
  return (
    <div className="imgContainerV">
      <img
        className="image--vertical"
        src={require("../../../images/" + imgSrc + ".jpg")}
        alt={altText}
      />
    </div>
  );
};
