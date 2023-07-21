"use client";

import { Formik, Field, Form, FormikProps, FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";
import { object, string, InferType } from "yup";

const FormSchema = object().shape({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  subject: string().required("Required"),
  message: string().required("Required")
});

export default function Contact() {
  const handleSubmit = async (
    values: InferType<typeof FormSchema>,
    { resetForm }: FormikHelpers<InferType<typeof FormSchema>>
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
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting
        }: FormikProps<InferType<typeof FormSchema>>) => (
          <Form className="grid grid-cols-1 gap-y-6 xl:grid-cols-5 xl:gap-x-12">
            <div className="flex flex-col">
              <label className="font-sf-regular text-sm transition-all dark:text-neutral-400 sm:text-base">
                First Name
              </label>
              <Field
                id="firstName"
                className={`h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light placeholder:text-sm dark:bg-dark-gray dark:placeholder:text-neutral-700 placeholder:sm:text-base ${
                  touched.firstName &&
                  errors.firstName &&
                  "border border-red-500"
                }`}
                type="text"
                value={values.firstName}
                placeholder="Enter here"
              />
              {touched.firstName && errors.firstName && (
                <div className="font-sf-light text-sm text-red-500">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-sf-regular text-sm transition-all dark:text-neutral-400 sm:text-base">
                Last Name
              </label>
              <Field
                id="lastName"
                className={`h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light placeholder:text-sm dark:bg-dark-gray dark:placeholder:text-neutral-700 placeholder:sm:text-base ${
                  touched.lastName && errors.lastName && "border border-red-500"
                }`}
                type="text"
                value={values.lastName}
                placeholder="Enter here"
              />
              {touched.lastName && errors.lastName && (
                <div className="font-sf-light text-sm text-red-500">
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-sf-regular text-sm transition-all dark:text-neutral-400 sm:text-base">
                Email
              </label>
              <Field
                id="email"
                className={`h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light placeholder:text-sm dark:bg-dark-gray dark:placeholder:text-neutral-700 placeholder:sm:text-base ${
                  touched.email && errors.email && "border border-red-500"
                }`}
                type="text"
                value={values.email}
                placeholder="Enter here"
              />
              {touched.email && errors.email && (
                <div className="font-sf-light text-sm text-red-500">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="flex flex-col xl:col-span-2">
              <label className="font-sf-regular text-sm transition-all dark:text-neutral-400 sm:text-base">
                Subject
              </label>
              <Field
                id="subject"
                className={`h-9 w-full rounded-lg bg-light-gray px-2 font-sf-light transition-all placeholder:font-sf-light placeholder:text-sm dark:bg-dark-gray dark:placeholder:text-neutral-700 placeholder:sm:text-base ${
                  touched.subject && errors.subject && "border border-red-500"
                }`}
                type="text"
                value={values.subject}
                placeholder="Enter here"
              />
              {touched.subject && errors.subject && (
                <div className="font-sf-light text-sm text-red-500">
                  {errors.subject}
                </div>
              )}
            </div>
            <div className="flex flex-col xl:col-span-5">
              <label className="font-sf-regular text-sm transition-all dark:text-neutral-400 sm:text-base">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                className={`h-32 max-h-64 min-h-[2.5rem] w-full rounded-lg bg-light-gray p-2 font-sf-light transition-all placeholder:font-sf-light placeholder:text-sm dark:bg-dark-gray dark:placeholder:text-neutral-700 placeholder:sm:text-base ${
                  touched.message && errors.message && "border border-red-500"
                }`}
                value={values.message}
                placeholder="Enter here"
              />
              {touched.message && errors.message && (
                <div className="font-sf-light text-sm text-red-500">
                  {errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="mt-2 h-9 w-full justify-self-end rounded-lg bg-light-gray font-sf-regular text-sm transition-all dark:bg-dark-gray dark:text-neutral-400 sm:text-base xl:col-start-5"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
