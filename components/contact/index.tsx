"use client";

import { Formik, Field, Form, FormikProps, FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const handleSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            subject: values.subject,
            message: values.message
          },
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        resetForm();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="mx-auto flex max-w-screen-xl flex-col py-12 px-[15%] sm:py-24 sm:px-[20%] xl:px-0"
      id="contact"
    >
      <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
        Contact Me
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<Values>) => (
          <Form className="grid grid-cols-1 gap-y-6 xl:grid-cols-5 xl:gap-x-12">
            <div className="flex flex-col">
              <label className="font-sf-regular transition-all dark:text-neutral-400">
                First Name
              </label>
              <Field
                id="firstName"
                className="h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light dark:bg-dark-gray dark:placeholder:text-neutral-700"
                type="text"
                value={props.values.firstName}
                placeholder="Enter here"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-sf-regular transition-all dark:text-neutral-400">
                Last Name
              </label>
              <Field
                id="lastName"
                className="h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light dark:bg-dark-gray dark:placeholder:text-neutral-700"
                type="text"
                value={props.values.lastName}
                placeholder="Enter here"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-sf-regular transition-all dark:text-neutral-400">
                Email
              </label>
              <Field
                id="email"
                className="h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light dark:bg-dark-gray dark:placeholder:text-neutral-700"
                type="email"
                value={props.values.email}
                placeholder="Enter here"
                required
              />
            </div>
            <div className="flex flex-col xl:col-span-2">
              <label className="font-sf-regular transition-all dark:text-neutral-400">
                Subject
              </label>
              <Field
                id="subject"
                className="h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light dark:bg-dark-gray dark:placeholder:text-neutral-700"
                type="text"
                value={props.values.subject}
                placeholder="Enter here"
                required
              />
            </div>
            <div className="flex flex-col xl:col-span-5">
              <label className="font-sf-regular transition-all dark:text-neutral-400">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                className="h-32 max-h-64 min-h-[2.5rem] w-full rounded-lg bg-light-gray p-2 font-sf-light transition-all placeholder:font-sf-light dark:bg-dark-gray dark:placeholder:text-neutral-700"
                value={props.values.message}
                placeholder="Enter here"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 h-9 w-full justify-self-end rounded-lg bg-light-gray font-sf-regular dark:bg-dark-gray dark:text-neutral-400 xl:col-start-5"
              onClick={props.submitForm}
              disabled={props.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
