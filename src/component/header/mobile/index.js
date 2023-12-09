import React from 'react';
import './mobile.css';

function Mobile({ isOpen, setIsOpen }) {

  return (
    <div className='mobile'>
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fa-solid fa-diagram-project option-icon"></i>Project
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fa-solid fa-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fa-solid fa-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fa-solid fa-id-badge option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile
