import { motion } from "motion/react";
import { OpacityAnimation } from "./Animation";

const opacityAnimation = OpacityAnimation;

export const RoundedBlurBackground = () => (
  <>
    <motion.div
      className="absolute w-[100px] h-[100px] rounded-full bg-cyan-300 dark:bg-cyan-800 top-0 left-0  blur-3xl z-1"
      initial="initial"
      whileInView="animate"
      variants={opacityAnimation}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false }}
    ></motion.div>
    <motion.div
      className="absolute w-[200px] h-[200px] rounded-full bg-cyan-300/50 dark:bg-cyan-800/50 bottom-0 right-0  blur-3xl z-1"
      initial="initial"
      whileInView="animate"
      variants={opacityAnimation}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false }}
    ></motion.div>
  </>
);
