import React from "react";

interface FooterItemInterface {
  children: JSX.Element;
}

export const FooterItem = (props: FooterItemInterface) => {
  return (
    <div>
      <h5>Contact</h5>
      {props.children}
    </div>
  );
};
