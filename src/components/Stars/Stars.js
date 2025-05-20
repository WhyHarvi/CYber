import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * StarRating
 * @param {number} value        Current rating (0-5, can be null)
 * @param {function} onChange   Callback: (newValue:number) => void
 * @param {number} max          How many stars? default 5
 */
export default function Stars({ value = 0, max = 5 }) {


  // decide what the widget should display: hovered preview or saved value
  const displayValue = value;

  // render an array like [0,1,2,3,4] → a star for each
  return (
    <div style={{ display: 'inline-flex', cursor: 'pointer', gap: '4px' }}>
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <i
          key={star}
          className={
            displayValue >= star ? 'bi bi-star-fill text-warning' : 'bi bi-star'
          }

          style={{ fontSize: '1rem', transition: 'color 0.2s' }}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
        />
      ))}
    </div>
  );
}
