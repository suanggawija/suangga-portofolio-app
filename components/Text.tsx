"use client";
import { motion } from "motion/react";
import { FadeInAnimation } from "./Animation";

const fadeInAnimation = FadeInAnimation;

interface Heading {
  title: React.ReactNode;
  className?: string;
  delay?: number;
}
export const H1: React.FC<Heading> = ({ title }) => (
  <motion.h1
    className="text-5xl font-medium"
    initial="initial"
    whileInView="animate"
    variants={fadeInAnimation}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: false }}
  >
    {title}
  </motion.h1>
);

export const H2: React.FC<Heading> = ({ title, delay = 0 }) => (
  <motion.h2
    className="text-3xl font-medium"
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
    {title}
  </motion.h2>
);

export const H3: React.FC<Heading> = ({ title }) => (
  <motion.h3
    className="text-xl font-medium"
    initial="initial"
    whileInView="animate"
    variants={fadeInAnimation}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: false }}
  >
    {title}
  </motion.h3>
);

export const H5: React.FC<Heading> = ({ title }) => (
  <motion.h5
    className="text-lg font-medium"
    initial="initial"
    whileInView="animate"
    variants={fadeInAnimation}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: false }}
  >
    {title}
  </motion.h5>
);

export const P: React.FC<Heading> = ({
  title,
  className = "text-lg font-medium",
  delay = 0,
}) => (
  <motion.p
    className={className}
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
    {title}
  </motion.p>
);
