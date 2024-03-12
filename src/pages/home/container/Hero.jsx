import React from "react";
import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = () => {
  return (
    <header className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <article className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Dive into a World of Wonder
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Explore articles that go beyond the ordinary, unlocking a realm of
          insights, diverse perspectives, and boundless curiosity. Let the
          journey begin, where each read fuels your passion for continuous
          learning.
        </p>
        <Search className="mt-10 lg:mt-6 xl:mt-10" />
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              UI/UX Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Artificial Intelligence (AI)
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Software Development
            </li>
          </ul>
        </div>
      </article>
      <article className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </article>
    </header>
  );
};

export default Hero;
