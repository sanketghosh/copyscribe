"use client";

import AboutApp from "./aboutapp";
import CopyForm from "./copyform";
import Result from "./result";

const Container = () => {
  return (
    <main className="text-gray-50">
      <AboutApp />
      <div className="max-w-7xl mx-auto px-3 py-4 flex flex-col justify-between items-center mt-3 md:mt-6 lg:mt-9 xl:mt-12 gap-14 md:gap-7 xl:gap-8">
        <CopyForm />
        <Result />
      </div>
    </main>
  );
};

export default Container;
