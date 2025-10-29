"use client";
import * as React from "react";

/**
 * BiographySection component displays a biography text alongside a section heading
 * in a responsive layout that adapts to different screen sizes.
 */
const BiographySection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center px-40 py-28 w-full bg-[linear-gradient(0deg,rgba(255,255,255,0.60)_0%,rgba(255,255,255,0.60)_100%)] max-md:px-24 max-md:py-20 max-sm:px-5 max-sm:py-10"
      aria-labelledby="biography-heading"
    >
      <div className="flex gap-28 items-start px-5 py-0 max-w-[1200px] max-md:gap-16 max-sm:flex-col-reverse max-sm:gap-10">
        <article className="h-auto text-base leading-7 text-stone-950 w-[656px] max-md:text-base max-md:leading-7 max-md:w-[500px] max-sm:w-full max-sm:text-sm max-sm:leading-6">
          <p>
            With a solid background in engineering, he approaches his work with
            precision, logic, and a problem-solving mindset. His ability to
            analyze situations from a technical perspective ensures that every
            solution he offers is well-structured, efficient, and effective.
            Yet, while his analytical skills are undeniably impressive, it's his
            deep sense of dedication to his clients that truly sets him apart.
            He understands that beyond numbers, data, and strategies, successful
            relationships are built on trust, empathy, and genuine connection.
            Through Treysta, he channels this belief into every interaction,
            striving to create meaningful relationships that extend far beyond a
            single transaction. His goal isn't just to meet client expectations
            — it's to exceed them, fostering bonds that are built on
            reliability, integrity, and personalized care. Whether he's guiding
            clients through complex decisions, offering tailored advice, or
            simply being a dependable presence, he remains committed to putting
            people first. His work is driven by a passion not only to deliver
            results but also to inspire confidence and build partnerships that
            stand the test of time.
          </p>
        </article>
        <h2
          id="biography-heading"
          className="text-4xl font-medium leading-10 text-stone-950 max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9"
        >
          Early Life and Education
        </h2>
      </div>
    </section>
  );
};

export default BiographySection;
