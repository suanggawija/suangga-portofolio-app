import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FadeInAnimation } from "./Animation";
import Link from "next/link";

const fadeInAnimation = FadeInAnimation;

interface CartProps {
  image: string;
  title: string;
  desc?: string;
  tags?: string[] | undefined;
  delay?: number;
  href?: string | undefined;
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
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-md hover:scale-110 overflow-hidden transition-all duration-3000ms"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 mt-4">
          {tags?.map((tag, index) => (
            <span
              className="text-xs bg-cyan-200 text-gray-500 px-2 py-1 rounded-full"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-medium mt-1">{title}</h3>
        <p className="mb-5">{desc}</p>
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
    <div className="p-3 bg-white dark:bg-gray-800 rounded-md h-[200px]">
      <div className="w-full rounded-md relative overflow-hidden">
        <Image
          priority
          src={image}
          alt={title}
          width={30}
          height={30}
          className="w-[30px] h-[30px] object-cover rounded-md hover:scale-110 overflow-hidden transition-all duration-3000ms"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h3 className="text-2xl font-medium mt-2">{title}</h3>
        <p className="dark:text-gray-500">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export const ToolsCart: React.FC<CartProps> = ({
  image,
  title,
  href,
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
    <Link href={href ?? "/"}>
      <div className="flex flex-col bg-white dark:bg-gray-800 p-1 text-center rounded-md">
        <div className="w-full rounded-md relative aspect-[1/1] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            priority
            className="w-full h-full object-cover rounded-md scale-70 hover:scale-80 overflow-hidden transition-all duration-3000ms"
          />
        </div>
        <p className="dark:text-gray-500">{title}</p>
      </div>
    </Link>
  </motion.div>
);
