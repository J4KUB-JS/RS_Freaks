interface ImageInterface {
  imgSrc: string;
  altText: string;
}

export const ImageHorizontal = (props: ImageInterface) => {
  return (
    <img className="image--horizontal" src={props.imgSrc} alt={props.altText} />
  );
};
