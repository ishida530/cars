'use client'

import Image from "next/image"
import { MdOutlineAttachMoney, MdOutlineHandshake, MdOutlineSpeed } from 'react-icons/md'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'

import { fadeIn } from "./variants"
import { motion } from "framer-motion"
import { useModal } from "../context/modal"
const About = () => {
    const { openModal } = useModal();
    const [ref, inView] = useInView({
        threshold: 0.5
    })
    return (
        <section className="section flex items-center" id="about" ref={ref} >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex-1 mb-8 xl:mb-0">
                        <Image
                            className="rounded-[20px]"
                            src={'/images/about/car01.png'}
                            width={600}
                            height={448}
                            alt=""
                        />
                    </motion.div>
                    <div className='flex-1 flex items-center  xl:justify-center '>
                        <div className="xl:max-w-[517px]">
                            <motion.h2
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                className="h2">Sprzedajesz auto?</motion.h2>
                            <motion.p
                                variants={fadeIn('up', 0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                className="mb-[42px] max-w-md">Skontaktuj się z nami już dziś!</motion.p>
                            <motion.div
                                variants={fadeIn('up', 0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex items-center gap-x-8 mb-12">
                                <div className="flex flex-col w-[100px] ">
                                    <MdOutlineAttachMoney className="text-5xl text-accent" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView
                                            ? <CountUp start="0" end={247} duration={3} delay={1} />
                                            : null}
                                        +
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        Zadowolonych <br /> klientów
                                    </div>
                                </div>
                                <div className="flex flex-col w-[100px] ">
                                    <MdOutlineHandshake className="text-5xl text-accent" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView
                                            ? <CountUp start="0" end={100} duration={3} delay={1} />
                                            : null}
                                        %
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        Uczciwe <br /> transakcje
                                    </div>
                                </div>
                                <div className="flex flex-col w-[100px] ">
                                    <MdOutlineSpeed className="text-5xl text-accent" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView
                                            ? <CountUp start="0" end={24} duration={3} delay={1} />
                                            : null}
                                        h
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        Szybka <br /> wycena
                                    </div>
                                </div>
                            </motion.div>
                            <motion.button
                                variants={fadeIn('up', 1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                onClick={openModal}
                                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full 
                                h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]">Dowiedz się więcej</motion.button>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default About
