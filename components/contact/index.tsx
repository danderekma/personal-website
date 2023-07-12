"use client";

export default function Contact() {
  return (
    <div
      className="mx-auto flex max-w-screen-xl flex-col py-12 px-[15%] sm:py-24 sm:px-[20%] xl:px-0"
      id="contact"
    >
      <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 gap-y-6 xl:grid-cols-3 xl:gap-x-12">
        <div className="flex flex-col">
          <label className="font-sf-regular transition-all dark:text-neutral-400">
            First Name
          </label>
          <input
            className="h-9 w-full rounded-lg border border-neutral-300 bg-white px-2 font-sf-light transition-all placeholder:font-sf-light dark:border-neutral-700 dark:bg-dark-gray dark:placeholder:text-neutral-700"
            type="text"
            placeholder="Enter here"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-sf-regular transition-all dark:text-neutral-400">
            Last Name
          </label>
          <input
            className="h-9 w-full rounded-lg border border-neutral-300 bg-white px-2 font-sf-light transition-all placeholder:font-sf-light dark:border-neutral-700 dark:bg-dark-gray dark:placeholder:text-neutral-700"
            type="text"
            placeholder="Enter here"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-sf-regular transition-all dark:text-neutral-400">
            Email
          </label>
          <input
            className="h-9 w-full rounded-lg border border-neutral-300 bg-white px-2 font-sf-light transition-all placeholder:font-sf-light dark:border-neutral-700 dark:bg-dark-gray dark:placeholder:text-neutral-700"
            type="email"
            placeholder="Enter here"
            required
          />
        </div>
        <div className="flex flex-col xl:col-span-3">
          <label className="font-sf-regular transition-all dark:text-neutral-400">
            Message
          </label>
          <textarea
            className="h-32 max-h-64 min-h-[2.5rem] w-full rounded-lg border border-neutral-300 bg-white p-2 font-sf-light transition-all placeholder:font-sf-light dark:border-neutral-700 dark:bg-dark-gray dark:placeholder:text-neutral-700"
            placeholder="Enter here"
            required
          />
        </div>
      </div>
    </div>
  );
}
