import React from 'react'

const Footer = () => {

  const footerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem"
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} GenMedia Store. All rights reserved.</p>
    </footer>
  )
}

export default Footer
