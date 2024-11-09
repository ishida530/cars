'use client'
import { useContext, useEffect, useState } from "react";
import Image from 'next/image';

import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { BiMenuAltRight, BiX, Bix } from 'react-icons/bi'
import { SearchContext } from "../context/search";
import SearchMobile from "./SearchMobile";
const Header = () => {
    const { setSearchActive } = useContext(SearchContext)
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false)

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    })

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true)
            } else {
                setHeader(false)

            }

            if (window.scrollY > 800) {
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        }
        window.addEventListener('scroll', handlerScroll)
        return () => {
            window.removeEventListener('scroll', handlerScroll)
        }

    })
    console.log(header)
    return (
        <header className={`${header ? 'bg-white shadow-md py-2' : ' bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>

            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">


                <div className="flex justify-between items-center px-4">


                    <Link
                        to='home'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        <Image src={'/icons/logo.svg'} width={194} height={64} alt="" />
                    </Link>
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer xl:hidden"
                    >
                        {nav ? (
                            <BiX />
                        ) : (
                            < BiMenuAltRight className="text-4xl" />
                        )

                        }
                    </div>
                </div>

                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
                    } 
                     flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}>
                    <Link
                        to='home'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to='cars'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        Cars
                    </Link>
                    <Link
                        to='about'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        to='why'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        Why
                    </Link>
                    <Link
                        to='testimonial'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        Testimonials
                    </Link>
                    <Link
                        to='contact'
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        Contact
                    </Link>
                    <Link
                        to='/'
                        smooth={desktopMode}
                        spy={true}
                        className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
                    >
                        See all cars
                    </Link>
                    <SearchMobile />
                </nav>


            </div>
        </header >
    )
}

export default Header