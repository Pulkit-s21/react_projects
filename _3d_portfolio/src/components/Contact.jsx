import { useState, useRef } from "react"
import { EarthCanvas } from "./canvas"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: [value] })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form, // short form of all typed below
        // {
        //   name: form.name,
        //   to: "Pulkit",
        //   email: form.email,
        //   to_email: "pulkitsaxena795@gmail.com",
        //   message: form.message,
        // },
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        () => {
          setLoading(false)
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Thankyou, I will get back to you as soon as possible",
          })
          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (err) => {
          setLoading(false)
          console.log(err)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        }
      )
  }

  return (
    <div
      id="contact"
      className="flex flex-col-reverse mx-auto max-w-screen-2xl p-4 lg:flex-row gap-10 overflow-hidden mt-6 lg:mt-12"
    >
      <motion.div
        // variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[.75] bg-black p-8 rounded-xl opacity-80"
      >
        <p className="uppercase text-gray-300 text-sm md:text-lg font-semibold">
          Get in touch
        </p>
        <h3 className="uppercase text-violet-300 font-bold text-4xl md:text-5xl tracking-wider">
          Contact.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
          ref={formRef}
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              autoComplete="off"
              type="text"
              placeholder="What's your good name?"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              autoComplete="off"
              type="email"
              placeholder="What's your web address?"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={5}
              placeholder="What's your message?"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button className="bg-tertiary font-bold shadow-md shadow-primary w-fit outline-none text-white py-3 px-8 hover:bg-white hover:text-tertiary transition-all duration-300 rounded-md">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] lg:h-auto lg:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}
