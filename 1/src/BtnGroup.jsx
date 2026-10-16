import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [activeButton, setActiveButton] = useState(0)
  //activeButton = -1, if left button is active
  //activeButton = 0, if all buttons is inactive
  //activeButton = 1, if right button is active
  return (
  <div className="btn-group" role="group">
    <button type="button" 
      className={activeButton === -1 ? "btn btn-secondary left active" : "btn btn-secondary left"} 
      onClick={() => setActiveButton(-1)}
    >Left</button>
    <button type="button" 
      className={activeButton === 1 ? "btn btn-secondary right active" : "btn btn-secondary right"}
      onClick={() => setActiveButton(1)}
    >Right</button>
  </div>
  )
  // END
};

export default BtnGroup;
