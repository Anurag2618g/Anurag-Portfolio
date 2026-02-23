import { useState } from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if(res.ok) {
        alert('Message sent');
        setForm({ name: '', email: '', message: '' });
      } 
      else {
        console.log(data.message);
      }
    }
    catch (err) {
      console.log(err);
      alert('Error sending message');
    }
  }

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-base text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern technologies
            , tools, and frameworks, dedicated to building efficient, scalable,
            and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 gap-10 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<FaMapMarkerAlt />} text={ABOUT_ME.location} />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                className="input-box"
                id=""
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                autoComplete="off"
              />
              <input
                className="input-box"
                id=""
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                autoComplete="off"
              />
              <textarea
                className="input-box"
                id=""
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Message"
                autoComplete="off"
              />
              <button type="submit" className="btn-outline btn-scale-anim">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
