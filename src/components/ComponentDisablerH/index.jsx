import React, { useState } from 'react';
import ClickerH from '../ClickerH';

function ComponentDisablerH () {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        SWITCH
      </button>
      {isVisible && <ClickerH />}
    </div>
  );
}

export default ComponentDisablerH;
