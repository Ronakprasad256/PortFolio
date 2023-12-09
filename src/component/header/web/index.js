import React from 'react';
import './web.css'

function Web() {
    return (
            <div className="web">
                <div className="web-option">
                    <a href="#project">
                        <i class="fa-solid fa-diagram-project option-icon"></i>Project
                    </a>
                </div>
                <div className="web-option">
                    <a href="#skills">
                    <i class="fa-solid fa-laptop option-icon"></i>Skills
                    </a>
                </div>
                <div className="web-option">
                    <a href="#work">
                    <i class="fa-solid fa-briefcase option-icon"></i>Work
                    </a>
                </div>
                <div className="web-option">
                    <a href="#contact">
                    <i class="fa-solid fa-id-badge option-icon"></i>Contact
                    </a>
                </div>
            </div>
    )
}

export default Web;
