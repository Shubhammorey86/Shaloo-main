import React from "react";

const ProfileContent: React.FC = () => {
  return (
    <article className="flex flex-col gap-5 max-w-[605px] max-md:max-w-full">
      <h2 className="text-4xl font-medium leading-10 text-black max-sm:text-3xl max-sm:leading-9">
        Who is Vaibhav Setiya?
      </h2>
      <p className="text-base leading-6 text-black max-sm:text-sm max-sm:leading-6">
        Vaibhav Setiya is more than just a real estate expert—he's a trusted
        partner for anyone navigating the fast-paced world of Dubai property. As
        the founder of Treysta, a name that stands for trust, Vaibhav has built
        a reputation not just for his expertise, but for his unwavering
        commitment to putting his clients first.
      </p>
      <p className="text-base leading-6 text-black max-sm:text-sm max-sm:leading-6">
        With a background as a civil engineer and over a decade of experience in
        real estate, Vaibhav has managed a portfolio worth over 100 million
        dirhams and closed deals exceeding 500 million dirhams. But his journey
        is not defined by numbers alone. It's driven by a deep passion for
        helping people make informed, confident decisions that will positively
        impact their lives for years to come.
      </p>
      <p className="text-base leading-6 text-black max-sm:text-sm max-sm:leading-6">
        For Vaibhav, real estate isn't just about transactions—it's about
        relationships. He listens, understands, and provides clear, honest
        advice that empowers his clients. Whether it's helping a family find
        their dream home or guiding an investor toward smart opportunities,
        Vaibhav's approach is grounded in transparency, integrity, and a genuine
        desire to help others succeed.
      </p>
    </article>
  );
};

export default ProfileContent;
