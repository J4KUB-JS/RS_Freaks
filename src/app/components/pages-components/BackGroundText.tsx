interface BackgroundTextInterface {
  text: string;
  variant: "big" | "medium" | "small";
}
export const BackgroundText = ({ text, variant }: BackgroundTextInterface) => {
  const classNames = "background-text " + variant;

  return <div className={classNames}>{text}</div>;
};
