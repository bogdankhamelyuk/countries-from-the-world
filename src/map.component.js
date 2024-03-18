import React from "react";

export default function MapComponent({ city }) {
  const mapUrl = `https://maps.google.com?q=${city}&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  );
}
