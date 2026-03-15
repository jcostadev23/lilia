import React from "react";
import Loader from "./Loader";

const ErrorPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8">
      <h2 className="font-display text-4xl text-white text-glow">Error 404</h2>
      <p className="text-sm uppercase tracking-[0.35em] text-white/60 mt-3">
        Page in construction
      </p>
      <Loader />
    </div>
  );
};

export default ErrorPage;
