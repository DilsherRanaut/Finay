import React from "react";

export default function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-item-inner">
        <div className="accordion-header" onClick={onClick}>
          <div className="accordion-title">{title}</div>

          {/* Plus and minus icon */}
          {isOpen ? (
            <span className="icon">−</span> // Minus icon when open
          ) : (
            <span className="icon">+</span> // Plus icon when closed
          )}
        </div>
        {isOpen && (
          <div className={`accordion-content ${isOpen ? "open" : ""}`}>
            {content}  {/* Render JSX directly */}
          </div>
        )}
      </div>
    </div>
  );
}
