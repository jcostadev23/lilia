import React from "react";

interface Props {
  description: string;
}
const Description: React.FC<Props> = (props) => {
  return (
    <p className="text-base sm:text-lg text-slate-200 font-medium text-center p-12 leading-relaxed">
      ola estou aki
      {props.description}
    </p>
  );
};

export default Description;
