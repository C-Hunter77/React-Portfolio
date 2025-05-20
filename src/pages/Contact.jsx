import React, { useState } from 'react';



function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
    } else if (field === 'email' && !validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email' }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', message: '' };
    let hasErrors = false;

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        hasErrors = true;
      } else if (field === 'email' && !validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Message sent (simulation)!');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onBlur={() => handleBlur('name')}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onBlur={() => handleBlur('email')}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message</label><br />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onBlur={() => handleBlur('message')}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
