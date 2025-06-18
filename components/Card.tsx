import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FadeInAnimation } from "./Animation";

const fadeInAnimation = FadeInAnimation;

interface CartProps {
  image: string;
  title: string;
  desc: string;
  tags?: string[] | undefined;
  delay?: number;
}
export const PortofolioCart: React.FC<CartProps> = ({
  image,
  title,
  tags,
  desc,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInAnimation}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{ once: false }}
    >
      <div className="w-full rounded-md relative aspect-[16/9] overflow-hidden">
        <Image
          priority
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-md hover:scale-110 overflow-hidden transition-all duration-3000ms"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-medium mt-2">{title}</h3>
        <div className="flex gap-2">
          {tags?.map((tag, index) => (
            <span
              className="text-xs bg-cyan-200 text-gray-500 px-2 py-1 rounded-full"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export const SkillCart: React.FC<CartProps> = ({
  image,
  title,
  desc,
  delay,
}) => (
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
    <div className="w-full rounded-md relative aspect-[1/1] overflow-hidden">
      <Image
        priority
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-md hover:scale-110 overflow-hidden transition-all duration-3000ms"
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-2xl font-medium mt-2">{title}</h3>
      <p>{desc}</p>
    </div>
  </motion.div>
);
