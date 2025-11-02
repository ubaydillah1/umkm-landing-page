import { motion } from "motion/react";
import { Button } from "./ui/button";
import type { Variants } from "motion/react";

export default function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.section
      className="sm:pt-[120px] container space-y-7 sm:space-y-10 pt-[100px] pb-10"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={item}
        className="text-center text-primary flex justify-center gap-2.5"
      >
        <div className="animate-shake-slow">👋</div>
        <span className="text-sm sm:text-lg">Hi, Kita dari kelompok ...</span>
      </motion.p>

      <motion.h1
        variants={item}
        className="text-center text-[32px] sm:text-[100px] font-recoleta mx-auto sm:leading-[100px]"
      >
        Menggali Potensi Lokal, Membawa UMKM ke Layar Global.
      </motion.h1>

      <motion.p
        variants={item}
        className="text-center sm:max-w-[400px] mx-auto text-[12px] max-w-[80%] sm:text-sm opacity-70"
      >
        Kami menjembatani antara kreasi lokal dan pasar digital, menciptakan
        branding yang kuat, dan membangun ekosistem bisnis yang berkelanjutan.
      </motion.p>

      <motion.div
        variants={item}
        className="mx-auto flex gap-4 sm:max-w-[400px] max-w-[300px]"
      >
        <Button className="flex-1">Strategi Kami</Button>
        <Button className="flex-1" variant="secondary">
          List UMKM
        </Button>
      </motion.div>
    </motion.section>
  );
}
