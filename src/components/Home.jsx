import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Divider } from '@mantine/core';
import { phone } from '../assets';


function Home() {
  return (
    <section className="relative w-full h-screen mx-auto backdrop-blur-md">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl flex mx-auto flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <br />{" "}
            <span className="text-secondary">W-GPT</span>
          </h1>
          <Divider my="sm" className="w-[35%] my-5" />
          <p className={`${styles.heroSubText} mt-4 text-white-100 flex-wrap w-[100%]`}>
            Trused Whatsapp GPT bot. Here for all your needs and questions.
          </p>
        </div>
        <img src={phone} alt="phone" />
      </div>
    </section>
  );
}

export default Home;
