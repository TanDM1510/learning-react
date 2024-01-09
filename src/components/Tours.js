import React from "react";
import Title from "./Title";
import { tourInfors } from "../data";
import Tour from "./Tour";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="tour" />

      <div className="section-center featured-center">
        {tourInfors.map((infor) => {
          return <Tour key={infor.id} {...infor} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
