"use client";
import { H1, H2, H3, P } from "@/components/Text";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FadeInAnimation } from "@/components/Animation";
import { ButtonSecondary, LinkUnderline } from "@/components/Button";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { PortofolioCart, SkillCart } from "@/components/Card";
import { PortofolioData } from "@/data/Portofolio";

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
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="w-full rounded-md relative aspect-[16/9] overflow-hidden"
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
              src={"/images/coba.png"}
              alt="coba"
              height={200}
              width={200}
              priority
              className="w-full h-full object-cover rounded-md hover:scale-110 overflow-hidden transition-all duration-3000ms"
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
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Keahlian" />
        <div className="grid grid-cols-4 gap-4 w-full">
          <SkillCart
            title="Klill"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptates."
            image="/images/coba.png"
            delay={0.6}
          />
          <SkillCart
            title="Klill"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptates."
            image="/images/coba.png"
            delay={0.8}
          />
          <SkillCart
            title="Klill"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptates."
            image="/images/coba.png"
            delay={1}
          />
          <SkillCart
            title="Klill"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptates."
            image="/images/coba.png"
            delay={1.2}
          />
        </div>
        <RoundedBlurBackground />
      </section>
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Tools" />
        <RoundedBlurBackground />
      </section>
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
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Pengalaman Pekerjaan" />
        <RoundedBlurBackground />
      </section>
      <section className="w-full min-h-screen justify-center items-center flex gap-4 flex-col relative px-[80px]">
        <H2 title="Pendidikan" />
        <RoundedBlurBackground />
      </section>
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
