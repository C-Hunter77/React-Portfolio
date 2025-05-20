import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Here are a couple ways to reach out to me</h2>
      <p>Since I would love to colaborate and work with like minds... If you want to know more about me, have any questions, or just want to connect — feel free to touch base!</p>

      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:knowledgeisking77@gmail.com">knowledgeisking77@gmail.com</a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/C-Hunter77" target="_blank" rel="noopener noreferrer">
            github.com/C-Hunter77
          </a>
        </li>
        {/* LinkedIn placeholder for later
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/your-link
          </a>
        </li>
        */}
      </ul>
    </section>
  );
}

export default Contact;
