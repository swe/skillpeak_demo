"use client";

import React, { useState } from 'react';

const ContactFormRu = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время.'
        });
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Произошла ошибка при отправке сообщения'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] py-8 px-2">
      <div className="tile-white-blur w-full max-w-lg mx-auto p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <img
              src="/images/contact.png"
              alt="Иконка контакта"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h2 className="pb-2 text-3xl font-bold">
            Свяжитесь с нами
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Ваш путь к построению новой карьеры начинается здесь
          </p>
        </div>

        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                Имя *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
                Фамилия *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
              Сообщение *
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input resize-none"
            />
          </div>
          <div className="w-full flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-sm text-white shadow-sm rounded border border-[#0395A6] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(to bottom, #0395A6 0%, #00786f 100%)',
                filter: 'none',
                minWidth: 120,
                textAlign: 'center',
              }}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormRu;
