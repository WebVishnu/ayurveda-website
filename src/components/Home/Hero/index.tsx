"use client"

import Link from "next/link";

const Hero = () => {
  return (
    <>
    <section className="relative bg-cover text-white md:pt-40 md:pb-28 py-20 bg-no-repeat bg-[url('https://www.shutterstock.com/image-photo/alternative-medicine-herbs-homeopathic-globules-600nw-1364888636.jpg')] lg:mt-46 sm:mt-44 mt-20" >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4 grid grid-cols-12">
        <div className="bg-white rounded-md p-10 lg:col-span-5 md:col-span-7 sm:col-span-10 col-span-12 dark:bg-dark" data-aos="fade-right">
          <div className="flex justify-between mb-6">
            <div className="px-4 py-2 bg-midnight_text rounded-sm">
              <p className=" text-white text-sm font-semibold">
                Welcome
              </p>
            </div>
          </div>
          <h3 className="text-midnight_text dark:text-white text-2xl font-bold mb-6">
            WELCOME TO AROGYA JEEVAN AYURVEDA
          </h3>
          <p className="text-muted dark:text-white/60 text-base mb-5">
          The journey of Arogya Jeevan Ayurveda began many years ago with the vision to improve the quality of life by making herbal healthcare available in India and Internationally.
          </p>
          <p className="text-muted dark:text-white/60 text-base mb-5">
          Our endeavor is to meticulously research and formulate standardized products of the highest quality. We firmly believe that the customer is of paramount importance and therefore we place customer satisfaction as our supreme priority.
          </p>
          <div className="flex justify-center mt-6">
            <Link
              href="/shop"
              className="text-white bg-linear-to-r text-sm from-error to-warning px-7 py-4 hover:from-white hover:to-white dark:hover:from-dark dark:hover:to-dark border font-semibold border-transparent hover:border-error hover:text-error rounded-md"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>

    </>
    
  );
};

export default Hero;
