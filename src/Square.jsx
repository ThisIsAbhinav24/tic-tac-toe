import React from 'react';
import './squarestyle.css';

export default function Square({ value,updater }) {
  return (
    <div className="squarestyle" onClick={updater}  >
      {value}
    </div>
  );
}
