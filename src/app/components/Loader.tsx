import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<Props> = ({ size = "large" }) => {
  const getSizeClassName = () => {
    switch (size) {
      case "small":
        return "h-4 w-4";
      case "large":
        return "h-20 w-20";
      default:
        return "h-6 w-6";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`relative ${getSizeClassName()}`}>
        <div className="absolute inset-0 rounded-full border border-pink-400/40 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-pink-400/80 to-cyan-400/60 blur-sm"></div>
        <div className="absolute inset-4 rounded-full bg-slate-950"></div>
      </div>
    </div>
  );
};

export default Loader;
