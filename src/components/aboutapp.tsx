"use client";

import { NextPage } from "next";

const AboutApp: NextPage = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-start md:justify-center select-none">
        <h1 className="text-zinc-800 font-bold text-lg lg:text-xl">
          Welcome to <b>copyscribe</b> ! Your AI <i>marketing copy</i> generator
        </h1>
      </div>
    </section>
  );
};

export default AboutApp;
