"use client";
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkUnderline,
} from "@/components/Button";
import { PortofolioCart } from "@/components/Card";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { H1, H2, P } from "@/components/Text";
import { PortofolioData } from "@/data/Portofolio";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative text-center px-[18px] md:px-[80px]">
        <H1 title="Suangga Wijanatha" />
        <P
          title="Full Stack Web Developer | Data Analyst | UI/UX Designer | Grafix"
          delay={0.5}
        />
        <div className="flex gap-4">
          <ButtonPrimary title="Contact Me" href="" delay={0.8} />
          <ButtonSecondary title="Download CV" href="" delay={1} />
        </div>
        <RoundedBlurBackground />
      </section>

      {/*  */}
      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[18px] md:px-[80px]">
        <H2 title="Tentang Saya" />
        <P
          className="w-[100%] md:w-[70%] text-center"
          title={
            <>
              Halo 👋, semoga harimu menyenangkan! Perkenalkan, saya{" "}
              <span className="font-semibold">Suangga Wijanatha</span> — seorang{" "}
              <span className="font-semibold">
                Full Stack Web Developer, Data Analyst, UI/UX Designer,
              </span>
              <span className="font-semibold">Graphic Designer</span>. Saya
              memiliki pengalaman dalam pengembangan website menggunakan Full
              Stack Web Developer, Data Analyst, UI/UX Designer, dan Graphic
              Designer <span className="font-semibold">React</span> dan{" "}
              <span className="font-semibold">Next.js</span> untuk sisi
              front-end, serta <span className="font-semibold">Laravel</span>{" "}
              dan <span className="font-semibold">MySQL</span> untuk back-end.
              Saya juga mampu merancang tampilan antarmuka yang intuitif dan
              menarik menggunakan <span className="font-semibold">Figma</span>.
              Di bidang data, saya terbiasa melakukan analisis data menggunakan{" "}
              <span className="font-semibold">Python</span> dan{" "}
              <span className="font-semibold">TensorFlow</span> sebagai pustaka
              utama dalam pengolahan data dan machine learning. Untuk kebutuhan
              desain grafis, saya menggunakan{" "}
              <span className="font-semibold">Adobe Illustrator</span> dan{" "}
              <span className="font-semibold">Photoshop</span> untuk menciptakan
              visual yang kreatif dan profesional.
            </>
          }
          delay={0.5}
        />

        <RoundedBlurBackground />
      </section>

      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[18px] md:px-[80px]">
        <H2 title="Portofolio" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
        <div className="flex w-full justify-center md:justify-end mt-3">
          <LinkUnderline title=" Lihat Portofolio Lainnya" href="/portofolio" />
        </div>
        <RoundedBlurBackground />
      </section>

      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[18px] md:px-[80px] relative">
        <H2 title="Kontak" />
        <div className="flex gap-2">
          <ButtonSecondary href="" title="Email" delay={0.3} />
          <ButtonSecondary href="" title="WhatsApp" delay={0.5} />
        </div>
        <RoundedBlurBackground />
      </section>
    </>
  );
};

export default Home;
