'use client'

import Image from "next/image"
import { SearchContext } from "../context/search"
import Search from "./Search"
import { useContext } from 'react'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from "./variants"

const Hero = () => {

    const { searchActive } = useContext(SearchContext)

    return (
        <section className="section h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
            <div className="container mx-auto h-full ">
                <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
                    <div className="text-center xl:max-w-xl xl:text-left mt-0 md:mt-16 xl:mt-0 ">
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className='h1 '>
                            Witaj w <strong className="text-accent">A</strong>&<strong className="text-accent">M</strong> Cars -
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="description max-w-[550px] mx-auto xl:mx-0 md:mb-6 xl:mb-10">
                            Skupujemy auta na terenie województwa mazowieckiego!
                            Gwarantujemy uczciwą i konkurencyjną wycenę. Zapewniamy naszym klientom szybki i
                            profesjonalny proces korzystny dla obu stron.
                            <a

                                className="btn md:hidden bg-black text-white px-0 py-3 rounded-full shadow-md mt-5  hover:scale-105 hover:bg-accent hover:shadow-lg"
                                href="tel:+48530200082">
                                Porozmawiajmy!
                            </a>
                        </motion.p>


                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[660px] xl:max-h-[542px] xl:absolute xl:-right-[-100px] xl:top-48 overflow-hidden ">
                            <Image src={'/images/hero/car.svg'} fill alt="Sprzedaj swój samochód" style={{ objectFit: 'contain' }} />
                        </motion.div>
                    </div>
                </div>

            </div>
            {
                searchActive ? (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ ease: easeInOut }}
                        className="fixed top-[80px] z-10 w-full max-w-[1920px]">
                        <Search />
                    </motion.div>
                ) : (
                    <div className="-mt-12 w-full max-w-[1300px] mx-auto">
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}>
                            <Search />
                        </motion.div>
                    </div>
                )
            }
        </section >
    )
}

export default Hero
