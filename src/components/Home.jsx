import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Divider } from '@mantine/core';
import { phone } from '../assets';
import WhatsappCanvas from "./canvas/Whatsapp";


function Home() {
  return (
    <section className="relative w-full h-screen mx-auto backdrop-blur-md">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl flex mx-auto flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <br />{" "}
            <span className="text-secondary">WhatsApp-GPT</span>
          </h1>
          <Divider my="sm" className="w-[35%] my-5" />
          <p className={`${styles.heroSubText} mt-4 text-white-100 flex-wrap w-[100%]`}>
          ChatGPT on WhatsApp: Your personal assistant in your pocket.
          </p>
        </div>
      </div>
      <WhatsappCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;
