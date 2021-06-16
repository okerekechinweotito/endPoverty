import React from "react";
import "./loadingLogo.css";

const LoadingLogo = () => {
  return (
    <article className="loading">
      <section className="loading__wrapper">
        <div className="loading--logo1"></div>
        <div className="loading--logo2"></div>
      </section>
    </article>
  );
};

export default LoadingLogo;
