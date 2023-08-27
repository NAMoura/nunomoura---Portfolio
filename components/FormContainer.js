import React, { useRef } from "react";

//emailJS
import emailjs from "@emailjs/browser";

//icon
import { BsArrowRight } from "react-icons/bs";

//toaster
import { Toaster, toast } from "react-hot-toast";

const FormContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      ref={form}
      onSubmit={sendEmail}
    >
      <div>
        {" "}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="name"
          className="input"
          name="user_name"
          required
        ></input>
        <input
          type="email"
          placeholder="email"
          className="input"
          name="user_email"
          required
        ></input>
      </div>
      <input
        type="text"
        placeholder="subject"
        className="input"
        name="user_subject"
        required
      ></input>
      <textarea
        placeholder="message"
        className="textarea"
        name="user_message"
        required
      ></textarea>
      <button
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
        type="submit"
        value="Send"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let's talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </form>
  );
};

export default FormContainer;
