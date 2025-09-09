import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-2">
      <div className="tile-white-blur w-full max-w-lg mx-auto p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <img
              src="/images/contact.png"
              alt="Contact Icon"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="pb-2 text-3xl font-bold">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Your pass to building a new career starts here
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-xs font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-xs font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="form-input resize-none"
            />
          </div>
          <div className="w-full flex justify-center pt-2">
            <button
              type="submit"
              className="btn-sm text-white shadow-sm rounded border border-[#0395A6]"
              style={{
                background: 'linear-gradient(to bottom, #0395A6 0%, #00786f 100%)',
                filter: 'none',
                minWidth: 120,
                textAlign: 'center',
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 