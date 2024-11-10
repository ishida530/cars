'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image"


const testimonialData = [
    {
        message: 'Sprzedaż mojego auta przez A&M Cars była szybka i bezproblemowa. Pracownicy byli profesjonalni i uczciwi na każdym etapie.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Magdalena Kaczmarek',
        job: 'Grafik komputerowy',
    },
    {
        message: 'Dzięki A&M Cars sprzedałem swój samochód po najlepszej cenie na rynku. Cały proces był jasny i przejrzysty.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Paweł Wiśniewski',
        job: 'Właściciel małej firmy',
    },
    {
        message: 'Jestem pod wrażeniem szybkiej wyceny i profesjonalizmu. Sprzedaż przebiegła bez stresu i otrzymałem natychmiastową płatność.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Katarzyna Wróbel',
        job: 'Inżynier',
    },
    {
        message: 'A&M Cars pomogli mi sprzedać moje auto w kilka dni. Czułem się dobrze zaopiekowany i polecam ich każdemu, kto szuka uczciwego partnera.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Tomasz Lewandowski',
        job: 'Menadżer sprzedaży',
    },
    {
        message: 'Bardzo cenię sobie podejście zespołu A&M Cars. Profesjonalizm i szybka obsługa sprawiły, że cały proces sprzedaży auta był przyjemny.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Ewelina Szymańska',
        job: 'Konsultantka finansowa',
    },
    {
        message: 'Miałem świetne doświadczenie ze sprzedażą pojazdu do A&M Cars. Otrzymałem uczciwą cenę i wszystko odbyło się bez komplikacji.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Adam Nowicki',
        job: 'Kierowca zawodowy',
    },
    {
        message: 'Dzięki A&M Cars mogłem szybko wymienić swój stary samochód na nowy model. Proces był przejrzysty i przebiegł bardzo sprawnie.',
        avatar: '/images/testimonial/avatar.png',
        name: 'Joanna Majewska',
        job: 'Architekt wnętrz',
    }
]
const TestimonialSlider = () => {
    return (<motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
    >
        <Swiper pagination={{
            clickable: true,
            dynamicBullets: true
        }}
            modules={[Pagination]}
            className="h-[450px] xl:h-[500px]"
        >
            {testimonialData.map((person, index) => {
                const { message, avatar, name, job } = person
                return (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col justify-center items-center text-center">
                            <FaQuoteLeft className="text-7xl text-accent mb-6" />
                            <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium"> {message}</div>
                            <Image src={avatar} width={64} height={64} alt="avatar" className="mb-4" />
                            <div className="text-lg font-medium">
                                {name}
                            </div>
                            <div className="text-secondary">
                                {job}
                            </div>
                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>


    </motion.div >
    )
}

export default TestimonialSlider