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
            <span className="text-secondary">Whatsapp-GPT</span>
          </h1>
          <Divider my="sm" className="w-[35%] my-5" />
          <p className={`${styles.heroSubText} mt-4 text-white-100 flex-wrap w-[60%]`}>
            ChatGPT on WhatsApp is designed to be accessible from anywhere.
            Whether you're on the go or at home, our AI-powered chatbot is
            always at your fingertips. With WhatsApp as the platform, you can
            easily connect with ChatGPT and leverage its advanced capabilities
            for a personalized messaging experience. Our top priority is to
            ensure that your conversations are kept private and secure, which is
            why we've implemented end-to-end encryption to guarantee that your
            messages remain confidential between you and the recipient.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
