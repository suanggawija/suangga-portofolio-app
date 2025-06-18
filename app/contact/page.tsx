"use client";
import { ButtonSecondary } from "@/components/Button";
import { RoundedBlurBackground } from "@/components/RoundedBlur";
import { H1 } from "@/components/Text";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <>
      <section className="w-full min-h-[500px] flex flex-col gap-4 justify-center items-center relative px-[80px] relative pt-[80px]">
        <H1 title="Kontak" />
        <div className="flex gap-2">
          <ButtonSecondary href="" title="Email" delay={0.3} />
          <ButtonSecondary href="" title="WhatsApp" delay={0.5} />
        </div>
        <RoundedBlurBackground />
      </section>
    </>
  );
};

export default Contact;
