import React from "react";

interface Props {
  name: string;
}

const Name: React.FC<Props> = (props) => {
  return (
    <h2 className="font-display text-2xl text-white text-center leading-tight mt-8">
      {props.name}
    </h2>
  );
};

export default Name;
