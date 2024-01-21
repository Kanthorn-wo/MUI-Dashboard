import React, { useEffect, useState } from 'react'
import '../App.css'
const AddProduct = () => {
  const [fadeIns, setFadeIns] = useState([false, false, false]);

  useEffect(() => {
    const timeouts = fadeIns.map((_, index) =>
      setTimeout(() => setFadeIns((prev) => [...prev.slice(0, index), true, ...prev.slice(index + 1)]), (index + 1) * 1000)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [fadeIns]);
  return (
    <>
      <div>
        {fadeIns.map((fadeIn, index) => (
          <div key={index} className={`box ${fadeIn ? 'fade-in' : ''}`} style={{ backgroundColor: index === 0 ? 'red' : index === 1 ? 'blue' : 'green' }}></div>
        ))}
      </div>
    </>
  )
}

export default AddProduct