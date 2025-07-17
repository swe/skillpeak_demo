import React from 'react';

const ContactForm = () => {
  return (

      <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
        <div className="pb-8 text-center">
          <h2 className="py-2 border-y text-5xl font-extrabold text-[var(--color-primary-dark)] [border-image:linear-gradient(to_right,transparent,var(--color-gray-200)/.8,transparent)1] md:text-6xl">
            Contact Us
          </h2>
          <p className="text-lg text-[var(--color-gray-700)]">
            Your pass to building a new career starts here
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-[var(--color-gray-900)]">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="cursor-pointer mt-1 block w-full rounded-md border-[var(--color-gray-200)] shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-[var(--color-gray-900)]">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="cursor-pointer mt-1 block w-full rounded-md border-[var(--color-gray-200)] shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-accent)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-gray-900)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="cursor-pointer mt-1 block w-full rounded-md border-[var(--color-gray-200)] shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-gray-900)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="cursor-pointer mt-1 block w-full rounded-md border-[var(--color-gray-200)] shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-accent)]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
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