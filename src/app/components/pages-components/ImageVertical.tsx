interface ImageInterface {
  imgSrc: string;
  altText: string;
}

export const ImageVertical = (props: ImageInterface) => {
  return (
    <img className="image--vertical" src={props.imgSrc} alt={props.altText} />
  );
};
