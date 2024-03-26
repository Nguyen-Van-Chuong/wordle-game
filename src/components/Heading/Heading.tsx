import React from "react";
import "./heading.css";
interface IProps {
  type: string;
  text: string;
}
const Heading: React.FC<IProps> = ({ type, text }) => {
  return <p className={`heading-${type}`}>{text}</p>;
};

export default Heading;
