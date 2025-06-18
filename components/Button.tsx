import Link from "next/link";
import React from "react";
import { FadeInAnimation } from "./Animation";
import { motion } from "motion/react";

const fadeInAnimation = FadeInAnimation;

type ButtonProps = {
  title: string;
  href: string;
  delay?: number;
};
export const ButtonPrimary: React.FC<ButtonProps> = ({
  title,
  href,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimation}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{ once: false }}
    >
      <Link
        href={href}
        className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 p-[2px]"
      >
        <div className="rounded-full px-4 py-1 text-gray-100 dark:text-gray-900 font-medium hover:bg-white/30 transition">
          {title}
        </div>
      </Link>
    </motion.div>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  title,
  href,
  delay,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimation}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{ once: false }}
    >
      <Link href={href} className="inline-block rounded-full">
        <div className="border border-cyan-500 rounded-full bg-transparent px-4 py-1 text-cyan-500 font-medium dark:hover:bg-white/10 hover:bg-cyan-200/20 transition">
          {title}
        </div>
      </Link>
    </motion.div>
  );
};

export const LinkUnderline: React.FC<ButtonProps> = ({ title, href }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    variants={fadeInAnimation}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: false }}
  >
    <Link href={href} className="text-cyan-500 underline">
      {title}
    </Link>
  </motion.div>
);
