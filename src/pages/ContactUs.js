import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#14233C] mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12">We would love to hear from you. Please reach out to us for any inquiries or to discuss your next project.</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#E56A1A]" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#E56A1A]" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#E56A1A]" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-[#E56A1A] text-white px-6 py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
