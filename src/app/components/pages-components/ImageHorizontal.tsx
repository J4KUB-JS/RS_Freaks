interface ImageInterface {
  imgSrc: string;
  altText: string;
}

export const ImageHorizontal = ({ imgSrc, altText }: ImageInterface) => {
  console.log(imgSrc);
  return (
    <div className="imgContainerH">
      <img
        className="image--horizontal"
        src={require("../../../images/" + imgSrc + ".jpg")}
        alt={altText}
      />
    </div>
  );
};
