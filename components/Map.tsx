import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11549.889497885253!2d-79.39893!3d43.6383395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d499d1ae3349%3A0x46ca5f395d2025b!2sEDealer!5e0!3m2!1sen!2sin!4v1729940902376!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;