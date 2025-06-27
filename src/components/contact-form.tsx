"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    // call your api here

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });

    if (response && (response as { success: boolean }).success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset mx-auto my-6 border-y border-neutral-100 py-12"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Ayush Deshmukh"
            className="shadow-aceternity focus-ring-2 focus-outline-none focus:ring-primary rounded-md px-2 py-1 text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="ayush@mayhem.com"
            className="shadow-aceternity focus-ring-2 focus-outline-none focus:ring-primary rounded-md px-2 py-1 text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Hi Ayush, I would like to discuss a project with you..."
            className="shadow-aceternity focus-ring-2 focus-outline-none focus:ring-primary resize-none rounded-md px-2 py-1 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-primary rounded-md px-4 py-2 text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
