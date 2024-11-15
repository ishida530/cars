'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "./variants"
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'
const Why = () => {
    return (
        <section className="section flex items-center " id="why">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h2 text-center">
                    Dlaczego warto wybrać <strong className="text-accent">A</strong>&<strong className="text-accent">M</strong> Cars?
                </motion.h2>
                <motion.p
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[680px] text-center mx-auto mb-2 ">
                    Nasza misja to zapewnienie naszym klientom szybkiego, uczciwego i profesjonalnego procesu handlu pojazdami, który przynosi korzyści obu stronom. Oferujemy konkurencyjne ceny!
                </motion.p>
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="hidden md:flex justify-center mb-6 xl:mb-2 ">
                    <Image src={'/images/why/car.svg'} width={1060} height={420} alt='' />
                </motion.div>

                <motion.div
                    variants={fadeIn('down', 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-4 xl:gap-x-[30px]">

                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdKey className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Sprawni i Doświadczeni Specjaliści</h3>
                        <p className="hidden xl:flex">Posiadamy wieloletnie doświadczenie w branży motoryzacyjnej. Jesteśmy gotowi pomóc Ci w każdym aspekcie transakcji</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdTrendingUp className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Szybka i Sprawna Obsługa</h3>
                        <p className="hidden xl:flex">Rozumiemy, że czas to pieniądz. Dlatego też staramy się, aby proces skupu i sprzedaży samochodów był jak najszybszy i najbardziej wygodny dla naszych klientów. Zapewniamy elastyczne terminy spotkań oraz błyskawiczną wycenę pojazdu</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <MdHandshake className="text-[38px] text-accent mb-4" />
                        <h3 className="h3">Transparentność i Uczciwość</h3>
                        <p className="hidden xl:flex">W A&M Cars kładziemy nacisk na uczciwość i transparentność. Każda transakcja odbywa się w jasny i przejrzysty sposób, abyś mógł mieć pewność, że otrzymujesz sprawiedliwą wartość za swój samochód</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Why