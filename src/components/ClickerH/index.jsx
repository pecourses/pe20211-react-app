import React, { useState, useEffect } from 'react';

function ClickerH () {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevClickCount => prevClickCount + 1);
    };

    document.body.addEventListener('click', handleClick);
    console.log('Add EL ', clickCount);

    return () => {
      document.body.removeEventListener('click', handleClick);
      console.log('Remove EL ', clickCount);
    };
  }, []);

  // useEffect(() => {
  //   // функция вызывается после рендера
  //   console.log('Срабатывает эффект ', clickCount);

  //   return () => {
  //     // функция для очищения эффекта
  //     console.log('Очищается эффект :>> ', clickCount);
  //   };
  // });

  return <div>{clickCount}</div>;
}

// setClickCount(newVal){
//   const prevValue=///
//   if(typeof newVal !== 'function'){
//     clickCount=newVal
//   } else {
//     clickCount=newVal(prevValue)
//   }
// }

export default ClickerH;
