import React from 'react';
import styles from './Greeting.module.css';

// Принять пропс isGreeting
function Greeting(props) {
  const { name, isGreeting } = props;

  return (
    <div className={styles.container}>
      {isGreeting ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
}

export default Greeting;
//rfce
