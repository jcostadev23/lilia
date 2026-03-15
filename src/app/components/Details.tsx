import React from "react";

interface Props {
  details: String;
}

const Details: React.FC<Props> = (props) => {
  return (
    <p className="text-sm sm:text-base text-slate-200 font-medium text-center leading-relaxed mt-6 p-6">
      {props.details}
    </p>
  );
};

export default Details;
