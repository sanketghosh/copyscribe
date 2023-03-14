"use client";

import React, { useState } from "react";

const Result = () => {
  const [deleteResult, setDeleteResult] = useState(false);

  function deleteResultHandler() {
    setDeleteResult(true);
  }

  let text: any = document.getElementById("result_text")?.innerHTML;
  const copyTextHandler = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("copied to clipboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {deleteResult == false && (
        <section className="w-full md:w-3/4">
          <div className="bg-zinc-200 px-3 py-4 rounded-sm">
            <p
              className="text-sm xl:text-base text-zinc-800 font-medium"
              id="result_text"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              explicabo magni, ullam quod ipsum, iste labore voluptatum corrupti
              nihil porro nemo ut, consectetur sit. Ratione illum cumque magnam
              est aperiam dolore distinctio doloremque quis, esse expedita ullam
              cum eum ipsa deleniti quidem repellendus voluptas perspiciatis
              soluta veritatis. Odit iure earum incidunt magnam delectus, itaque
              id mollitia eligendi expedita est quasi. Vero alias ratione
              reprehenderit totam praesentium quo repellat facere nobis, eius
              minima laboriosam sapiente accusamus hic officia ab voluptatibus
              tempora culpa veritatis vel accusantium asperiores perferendis,
              quaerat mollitia. Fugit, debitis quidem? Officiis culpa accusamus
              animi ab odit sunt in doloremque!
            </p>
            <div className="flex items-center justify-end gap-3 mt-5">
              <button
                className="bg-zinc-800 hover:bg-zinc-900 p-2 text-xs rounded-full"
                onClick={copyTextHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-clipboard w-4 h-4"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </button>

              <button
                className="bg-zinc-800 hover:bg-zinc-900 p-2 text-xs rounded-full"
                onClick={deleteResultHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-trash-2 w-4 h-4"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Result;
