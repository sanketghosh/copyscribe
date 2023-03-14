"use client";

const AppHeader = () => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-3 py-3 md:py-6 lg:py-8">
        <div className="flex items-center gap-1 select-none cursor-pointer md:justify-center">
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
            className="feather feather-pen-tool w-6 h-6 lg:w-7 lg:h-7"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
          <h1 className="font-bold text-xl lg:text-2xl text-zinc-800">
            copyscribe
          </h1>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
