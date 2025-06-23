"use client";
import { PortofolioCart } from "@/components/Card";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { H1, P } from "@/components/Text";
import { PortofolioDataFull } from "@/data/Portofolio";
import React from "react";

const Portofolio = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[18px] md:px-[80px] mt-[120px]">
        <H1 title="Portofolio" />
        <P
          title="Project Portofolio Suangga yang mencangkup Website, Data Analisis, UI UX dan Grafix Desain"
          delay={0.5}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-[80px]">
          {PortofolioDataFull.map((porto, index) => (
            <PortofolioCart
              key={index}
              image={porto.images}
              title={porto.title}
              desc={porto.desc}
              tags={porto.tags}
              delay={index % 2 == 0 ? 0.4 : 0.8}
            />
          ))}
        </div>
        <RoundedBlurBackground />
      </section>
    </>
  );
};

export default Portofolio;
