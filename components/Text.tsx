"use client";
import { motion, useInView } from "motion/react";
import { FadeInAnimation } from "./Animation";
import { useRef } from "react";

const fadeInAnimation = FadeInAnimation;

interface Heading {
  title: React.ReactNode;
  className?: string;
  delay?: number;
}

export const H1: React.FC<Heading> = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h1
      ref={ref}
      className="text-5xl font-medium"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInAnimation}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h1>
  );
};

export const H2: React.FC<Heading> = ({ title, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h2
      ref={ref}
      className="text-3xl font-medium"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInAnimation}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
  );
};

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
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInAnimation}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
    >
      {title}
    </motion.h2>
  );
};
