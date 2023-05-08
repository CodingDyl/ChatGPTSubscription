import React from 'react'
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Grid, Accordion } from '@mantine/core';
import { styles } from '../styles';

const FAQ = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>FAQ</p>
        <h2 className={styles.sectionHeadText}>Frequently Asked Questions.</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("right", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        {`WhatsApp-GPT is an AI-based chatbot designed to answer questions on a wide variety of topics. WhatsApp-GPT will analyze your question and provide you with an answer based on the information powered by ChatGPT-3.5 and ChatGPT-4.`}
    </motion.p>

    <motion.div className="mt-10">
        <Grid>
                <Grid.Col span={12} md={6}>
                    <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                        <Accordion label="What is WhatsApp-GPT?">
                            <Accordion.Item value="What is WhatsApp-GPT?">
                                <Accordion.Control className="text-secondary">What is WhatsApp-GPT?</Accordion.Control>
                                <Accordion.Panel>
                                    <p className="text-white-100">WhatsApp-GPT is an AI-based chatbot designed to answer questions on a wide variety of topics. WhatsApp-GPT will analyze your question and provide you with an answer based on the information powered by ChatGPT-3.5 and ChatGPT-4.</p>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </Grid.Col>
                <Grid.Col span={12} md={6}>
                    <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                        <Accordion label="How do I use WhatsApp-GPT?">
                            <Accordion.Item value="How do I use WhatsApp-GPT?">
                                <Accordion.Control className="text-secondary">How do I use WhatsApp-GPT?</Accordion.Control>
                                <Accordion.Panel>
                                    <p className="text-white-100">WhatsApp-GPT is an AI-based chatbot designed to answer questions on a wide variety of topics. WhatsApp-GPT will analyze your question and provide you with an answer based on the information powered by ChatGPT-3.5 and ChatGPT-4.</p>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </Grid.Col>
                <Grid.Col span={12} md={6}>
                    <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                        <Accordion label="How do I use WhatsApp-GPT?">
                            <Accordion.Item value="How do I use WhatsApp-GPT?">
                                <Accordion.Control className="text-secondary">Is WhatsApp-GPT Free?</Accordion.Control>
                                <Accordion.Panel>
                                    <p className="text-white-100">Although a free version of the AI-powered personal chatbot is available, it has certain limitations and is intended to provide users with a preview of the capabilities of the technology. This introductory version offers users an opportunity to experience the chatbot's functionality and features firsthand, while the full version provides more advanced and comprehensive capabilities.</p>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </Grid.Col>
                <Grid.Col span={12} md={6}>
                    <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                        <Accordion label="How do I use WhatsApp-GPT?">
                            <Accordion.Item value="How do I use WhatsApp-GPT?">
                                <Accordion.Control className="text-secondary">How does WhatsApp-GPT compare to other AI models?</Accordion.Control>
                                <Accordion.Panel>
                                    <p className="text-white-100">WhatsApp-GPT is an AI-based chatbot designed to answer questions on a wide variety of topics using the ChatGPT-3.5 and ChatGPT-4 models. These models are some of the most advanced and sophisticated language models available, with the ability to generate human-like responses to a wide variety of inputs.</p>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </Grid.Col>
        </Grid>
    </motion.div>
    </>
  )
}

export default SectionWrapper(FAQ, "faq");