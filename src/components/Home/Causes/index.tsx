"use client"
import { FeaturedProducts } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const Causes = () => {
    const settings = {
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="lg:py-28 py-16 bg-grey dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <h2 className="text-center text-3xl font-medium mb-3" data-aos="fade-left">
                    Featured Products
                </h2>
                <p className="text-base text-muted dark:text-white/60 text-center">
                Discover our premium range of Ayurvedic products for natural health and wellness.<br className="lg:block hidden" />  Made with authentic herbs and traditional formulations.
                </p>
                <div className="mt-20">
                    <Slider {...settings}>
                        {FeaturedProducts.map((item, index) => (
                            <div key={index} className="px-4">
                                <div className="bg-white group dark:bg-dark rounded-4 overflow-hidden " data-aos="fade-up" data-aos-delay={`${(index) * 250}`}>
                                    <div className="overflow-hidden relative">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={350}
                                            height={250}
                                            className="w-full h-auto group-hover:scale-110 duration-300"
                                        />
                                        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors">
                                            <Icon icon="mdi:heart-outline" className="text-xl" />
                                        </button>
                                    </div>
                                    <div className="px-8 pt-8 pb-6 shadow-cause-shadow dark:shadow-darkmd">
                                        <h4 className="text-lg font-bold dark:text-white group-hover:text-primary mb-4">
                                            {item.name}
                                        </h4>
                                        <p className="text-muted dark:text-white/60 text-base pb-8 border-b-2 border-border relative after:content-[''] after:absolute after:w-70% after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-linear-to-r after:from-primary after:to-secondary">
                                            {item.description}
                                        </p>
                                        <div className="flex gap-4 mt-4 items-center justify-between">
                                            <div>
                                                <h5 className="text-2xl font-bold text-primary">
                                                    {item.price}
                                                </h5>
                                            </div>
                                            <Link href={`/shop/${item.slug}`} className="bg-primary text-white px-6 py-2 rounded-md hover:bg-darkprimary transition-colors">
                                                Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Causes;