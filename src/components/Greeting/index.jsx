import React from 'react';

// Принять пропс isGreeting
function Greeting(props) {
  const { name, isGreeting } = props;

  return (
    <div>
      {isGreeting ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
}

export default Greeting;
//rfce
