import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ToTopButton = () => {

  const [visible,setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0});
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <button className="float-button" onClick={scrollToTop} 
        style={{display: visible ? 'block' : 'none'}}>
        <IoIosArrowUp />
      </button>
    </>
  );
};

export default ToTopButton;
