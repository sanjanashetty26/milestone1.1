import React from 'react';

const Location = () => {
  return (
    <div className="location-container" style={styles.container}>
      <h2 style={styles.title}>📍 Visit Us at Ideal Ice Cream Café</h2>

      <div style={styles.infoSection}>
        <div style={styles.details}>
          <p><strong>Address:</strong><br />
          123 Sweet Street, IceCream Town, IC 45678</p>

          <p><strong>Opening Hours:</strong><br />
          Mon - Fri: 10:00 AM – 10:00 PM<br />
          Sat - Sun: 11:00 AM – 11:00 PM</p>

          <p><strong>Contact:</strong><br />
          +1 (123) 456-7890<br />
          idealcafe@example.com</p>
        </div>

        <div style={styles.map}>
          <iframe
            title="Ideal Ice Cream Café Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1415327062596!2d106.66017277587557!3d10.800204389348837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929273a7b55%3A0x8b9e7a14220cba5a!2sIce%20Cream%20Cafe!5e0!3m2!1sen!2s!4v1617173492234!5m2!1sen!2s"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#fff8f3',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#d17c7c',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
  details: {
    maxWidth: '500px',
    lineHeight: '1.8',
    fontSize: '1rem',
  },
  map: {
    width: '100%',
    maxWidth: '600px',
  },
};

export default Location;
