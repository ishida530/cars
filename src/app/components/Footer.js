'use client'

import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa6";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="pt-20 bg-white z-20" id="contact">
            <div className="container mx-auto mb-24">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-14"
                >
                    <div className="flex flex-col flex-1 gap-y-8">
                        <Link
                            to={'home'}
                            smooth={true}
                            spy="true"
                            className="cursor-pointer"
                        >
                            <Image src={"/icons/logo.png"} width={200} height={200} alt="Company Logo" />
                        </Link>
                        <div className="text-secondary">
                            Nasza misja to uproszczenie procesu sprzedaży i zakupu samochodów. Gwarantujemy rzetelność, konkurencyjne oferty i najwyższą jakość obsługi klienta.
                        </div>
                        <div className="flex flex-col gap-y-4 font-semibold">
                            <div className="flex items-center gap-x-[10px]">
                                <FaPhone />
                                <div><a href="tel:+48530200082">Porozmawiajmy!</a></div>
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <FaEnvelope />
                                <div className="font-medium"><a href="mailto:Amcars6@outlook.com">Napisz do nas!</a></div>
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <FaFacebook />
                                <div><a href="https://www.facebook.com/profile.php?id=61558262030511" target="_blank" rel="noopener noreferrer">Znajdź nas na Facebooku</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="h3 font-bold mb-8">Dostępność</h3>
                        <div className="flex flex-col gap-y-4">
                            <div className="text-secondary font-medium">
                                Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu, aby odpowiedzieć na Twoje potrzeby. Skontaktuj się z nami o dowolnej porze!
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer;
