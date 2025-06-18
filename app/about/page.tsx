"use client";
import { H1, H2, P } from "@/components/Text";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FadeInAnimation } from "@/components/Animation";
import { ButtonSecondary, LinkUnderline } from "@/components/Button";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { PortofolioCart, SkillCart, ToolsCart } from "@/components/Card";
import { PortofolioData } from "@/data/Portofolio";
import { KeahlianData } from "@/data/Keahlian";
import { Tools } from "@/data/Tools";

const About = () => {
  return (
    <>
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative">
        <H1 title="Tentang Saya" />
        <P
          title={
            <>
              Mari bekenalan lebih dalam mengenai{" "}
              <span className="font-semibold">Suangga Wijanatha</span>
            </>
          }
          delay={0.5}
        />
        <RoundedBlurBackground />
      </section>

      {/* about */}
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="w-full h-[400px] rounded-md relative aspect-[9/12] overflow-hidden"
            initial="initial"
            whileInView="animate"
            variants={FadeInAnimation}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <Image
              src={"/images/suangga.png"}
              alt="coba"
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover rounded-md overflow-hidden transition-all duration-3000ms"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            <H2 title="Suangga Wijanatha" delay={0.5} />
            <P
              className="w-full"
              title={
                <>
                  Perkenalkan, saya{" "}
                  <span className="font-semibold">Suangga Wijanatha</span> —
                  seorang{" "}
                  <span className="font-semibold">
                    Full Stack Web Developer, Data Analyst, UI/UX Designer,
                  </span>
                  <span className="font-semibold">Graphic Designer</span>. Saya
                  memiliki pengalaman dalam pengembangan website menggunakan
                  Full Stack Web Developer, Data Analyst, UI/UX Designer, dan
                  Graphic Designer <span className="font-semibold">React</span>{" "}
                  dan <span className="font-semibold">Next.js</span> untuk sisi
                  front-end, serta{" "}
                  <span className="font-semibold">Laravel</span> dan{" "}
                  <span className="font-semibold">MySQL</span> untuk back-end.
                  Saya juga mampu merancang tampilan antarmuka yang intuitif dan
                  menarik menggunakan{" "}
                  <span className="font-semibold">Figma</span>. Di bidang data,
                  saya terbiasa melakukan analisis data menggunakan{" "}
                  <span className="font-semibold">Python</span> dan{" "}
                  <span className="font-semibold">TensorFlow</span> sebagai
                  pustaka utama dalam pengolahan data dan machine learning.
                  Untuk kebutuhan desain grafis, saya menggunakan{" "}
                  <span className="font-semibold">Adobe Illustrator</span> dan{" "}
                  <span className="font-semibold">Photoshop</span> untuk
                  menciptakan visual yang kreatif dan profesional.
                </>
              }
              delay={0.8}
            />
          </div>
        </div>
        <RoundedBlurBackground />
      </section>

      {/* Keahlian */}
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Keahlian" />
        <div className="grid grid-cols-4 gap-4 w-full">
          {KeahlianData.map((keahliah, index) => (
            <SkillCart
              key={index}
              title={keahliah.title}
              desc={keahliah.desc}
              image={keahliah.image}
              delay={0.2 * index + 0.4}
            />
          ))}
        </div>
        <RoundedBlurBackground />
      </section>
      {/* tools */}
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Tools" />
        <div className="grid grid-cols-10 gap-4">
          {Tools.map((tool, index) => (
            <ToolsCart
              title={tool.title}
              image={tool.image}
              href={tool.href}
              key={index}
              delay={0.2 * index}
            />
          ))}
        </div>
        <RoundedBlurBackground />
      </section>
      {/* portofolio */}
      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[80px]">
        <H2 title="Portofolio" />
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
      {/* Pengalaman */}
      {/* <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Pengalaman Pekerjaan" />
        <RoundedBlurBackground />
      </section> */}
      {/* pendidikan */}
      {/* <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Pendidikan" />
        <RoundedBlurBackground />
      </section> */}
      <section className="w-full min-h-screen flex flex-col gap-4 justify-center items-center relative px-[80px] relative">
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

export default About;
