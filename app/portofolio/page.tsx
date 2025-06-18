"use client";
import { LinkUnderline } from "@/components/Button";
import { PortofolioCart } from "@/components/Card";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { H1, P } from "@/components/Text";
import { PortofolioData } from "@/data/Portofolio";
import React from "react";
import { motion } from "motion/react";

const Portofolio = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[80px] mt-[80px]">
        <H1 title="Portofolio" />
        <P
          title="Project Portofolio Suangga yang mencangkup Website, Data Analisis, UI UX dan Grafix Desain"
          delay={0.5}
        />
        <div className="w-full grid grid-cols-2 gap-4 ">
          {PortofolioData.map((porto, index) => (
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
        <div className="flex w-full justify-end mt-3">
          <LinkUnderline title=" Lihat Portofolio Lainnya" href="/portofolio" />
        </div>
        <RoundedBlurBackground />
      </section>
    </>
  );
};

export default Portofolio;
