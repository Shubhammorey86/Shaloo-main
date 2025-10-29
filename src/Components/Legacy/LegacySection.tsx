"use client";
import * as React from "react";
import PortraitImage from "./PortraitImage";

function LegacySection() {
  return (
    <section className="flex bg-[url('/blackbg.png')] bg-cover  bg-center justify-center items-center px-40 py-0 h-screen overflow-hidden max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="flex relative justify-between items-center px-0 py-24 mx-auto w-full max-w-[1200px] max-md:flex-col max-md:gap-10 max-md:px-0 max-md:py-16 max-md:max-w-[991px] max-sm:px-0 max-sm:py-10 max-sm:max-w-screen-sm">
        <article className="flex flex-col gap-5 max-w-[574px] max-md:max-w-full">
          <h2 className="text-4xl font-medium leading-10 text-left text-white max-sm:text-3xl max-sm:leading-9">
            A Legacy of Humility and Impact
          </h2>
          <p className="text-lg leading-9 text-white opacity-85 max-sm:text-base max-sm:leading-7">
            Humility is at the core of his character. Despite his significant
            accomplishments in the real estate industry, Vaibhav remains
            grounded and focused on what truly matters—people. Whether it's his
            clients, his family, or his community, he always strives to act with
            integrity and compassion, ensuring that trust is at the heart of
            every relationship he builds.
          </p>
          <p className="text-lg leading-9 text-white opacity-85 max-sm:text-base max-sm:leading-7">
            For Vaibhav, true success isn't measured by numbers or milestones,
            but by the impact he has on the lives of others. He takes pride in
            being a mentor and guide to his team members, helping clients make
            decisions that will shape their futures, just as he strives to guide
            his own child with love and wisdom. His legacy is not just in his
            professional accomplishments, but in the trust he earns and the
            lives he touches along the way.
          </p>
        </article>
        <div className="shrink-0 max-md:hidden">
          <PortraitImage />
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
