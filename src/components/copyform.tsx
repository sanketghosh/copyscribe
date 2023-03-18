"use client";

type CopyFormProps = {
  input: string;
  inputChangeHandler: (c: any) => void;
  submitHandler: (e: any) => void;
};

const CopyForm = ({
  input,
  inputChangeHandler,
  submitHandler,
}: CopyFormProps) => {
  return (
    <form className="w-full md:w-3/4 flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <div className="text-[10px] md:text-sm lg:text-base text-gray-800 font-medium select-none flex justify-between items-center">
          <label className="">Enter the subject you wanna generate</label>

          <span>
            {input.length} / <b>100</b>
          </span>
        </div>
        <input
          type="text"
          placeholder="headsy headphones"
          onChange={inputChangeHandler}
          value={input}
          className="bg-gray-50 px-3 py-2 lg:py-3 rounded-sm w-full border-[2px] border-gray-300 outline-1 text-gray-800 focus:outline-gray-500 text-sm md:text-base font-medium placeholder:font-light"
        />
      </div>
      <button
        className="px-3 py-2 lg:py-3 bg-zinc-800 hover:bg-zinc-900 transition font-medium rounded-sm text-[14px] lg:text-base flex items-center gap-2 justify-center"
        type="submit"
        onClick={submitHandler}
      >
        Surprise Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-gift w-5 h-5"
        >
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      </button>
    </form>
  );
};

export default CopyForm;
