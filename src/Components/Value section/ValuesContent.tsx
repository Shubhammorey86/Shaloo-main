import React from "react";

/**
 * ValuesContent component displays the textual content about
 * Vaibhav Setiya's values and journey.
 */
const ValuesContent: React.FC = () => {
  return (
    <article className="flex flex-col flex-1 justify-center text-white">
      <h2
        id="values-heading"
        className="text-4xl font-semibold tracking-normal leading-10 max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9"
      >
        The Values That Define Vaibhav Setiya's Journey
      </h2>

      <p className="mt-6 text-lg leading-7 text-neutral-200 max-md:text-base max-md:leading-6">
        Success is often measured by achievements, milestones, and accolades —
        but for Vaibhav Setiya, true success is defined by something far deeper:
        his unwavering commitment to family, humility, and a purposeful life.
      </p>

      <p className="mt-6 text-lg leading-7 text-neutral-200 max-md:text-base max-md:leading-6">
        Beyond his impressive professional accomplishments, Vaibhav is a man
        deeply anchored in values that shape both his personal and professional
        journey. At the heart of these values is fatherhood — a role that has
        profoundly influenced his outlook on life. Being a father has taught him
        invaluable lessons in patience, empathy, and resilience. Every day, his
        experiences as a parent reinforce the importance of leading with
        compassion, understanding, and unwavering integrity.
      </p>

      <p className="mt-6 text-lg leading-7 text-neutral-200 max-md:text-base max-md:leading-6">
        For Vaibhav, fatherhood is more than just a role — it's a guiding force
        that shapes his interactions, decisions, and ambitions. Whether he's
        supporting his loved ones or driving meaningful change in his
        professional sphere, he approaches each challenge with a mindset rooted
        in responsibility and care. This deep sense of purpose inspires him to
        build authentic connections, foster positive change, and leave a lasting
        impact on those around him.
      </p>

      <p className="mt-6 text-lg leading-7 text-neutral-200 max-md:text-base max-md:leading-6">
        Through his journey, Vaibhav continues to exemplify that true success
        isn't just about reaching goals — it's about uplifting others, staying
        grounded, and embracing the values that matter most.
      </p>
    </article>
  );
};

export default ValuesContent;
