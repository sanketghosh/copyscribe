"use client";

import React, { useState } from "react";
import AboutApp from "./aboutapp";
import CopyForm from "./copyform";
import Result from "./result";

const Container = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState({});

  function inputChangeHandler(e: any) {
    setInput(e.target.value);
  }
  // console.log(input);

  async function submitHandler(e: any) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/copy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    const answer: Object = await res.json();
    setAnswer(answer);
  }

  return (
    <main className="text-gray-50">
      <AboutApp />
      <div className="max-w-7xl mx-auto px-3 py-4 flex flex-col justify-between items-center mt-3 md:mt-6 lg:mt-9 xl:mt-12 gap-14 md:gap-7 xl:gap-8">
        <CopyForm
          input={input}
          inputChangeHandler={inputChangeHandler}
          submitHandler={submitHandler}
        />
        <Result result={answer} />
      </div>
    </main>
  );
};

export default Container;
