"use client";

export default function Contact() {
  return (
    <div
      className="mx-auto flex max-w-screen-2xl flex-col py-12 sm:py-24"
      id="contact"
    >
      <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
        Contact Me
      </h1>
      <label className="font-sf-regular dark:text-neutral-400">
        First Name
      </label>
      <input
        className="h-9 w-2/5 rounded-lg border border-neutral-300 bg-white px-2 font-sf-light"
        type="text"
        placeholder="Enter here"
      />
    </div>
  );
}
