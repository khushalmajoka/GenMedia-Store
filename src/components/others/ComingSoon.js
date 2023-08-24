import React from 'react'
import notFoundImage from '../../images/not-found-img.png'

const ComingSoon = () => {
  return (
    <div>
      <div
      style={{
        height: "84vh",
        display: 'flex',
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "70%",
          marginTop: "30px",
        }}
      >
        <img
          src={notFoundImage}
          alt=""
          style={{
            height: "100%",
          }}
        />
        <div style={{
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "monospace",
            textAlign: "center",
        }}>Will be coming soon...</div>
      </div>
    </div>
    </div>
  )
}

export default ComingSoon
