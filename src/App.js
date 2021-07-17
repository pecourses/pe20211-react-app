import './App.css';
import React from 'react';
import VeiwPortParams from './components/VeiwPortParams';

function App() {
  return <VeiwPortParams />;
}

// prop children
// function TestComponent(props) {
//   const { prop1, className, children } = props;
//   console.log(`prop1`, prop1);
//   console.log(`className`, className);
//   return <div>{children}</div>;
// }

// function App() {
//   return <TestComponent className={'test'}>111111</TestComponent>;
// }

// Создать компонент NamedList - принимать name -> h2 и список

// function NamedList(props) {
//   const { name, children } = props;
//   return (
//     <>
//       <h2>{name}</h2>
//       <ul>{children}</ul>
//     </>
//   );
// }

// function App() {
//   return (
//     // <NamedList name={'test'}>
//     //   <li>1</li>
//     //   <li>2</li>
//     //   <li>3</li>
//     // </NamedList>
//     <NamedList name={'test'} children={[<li>1</li>, <li>2</li>, <li>3</li>]} />
//   );
// }

// === Проброс пропсов =================
// function App() {
//   return (
//     <ImageWrapper
//       width={'400px'}
//       height={'300px'}
//       title={'Cat)))'}
//       tabIndex={1}
//       className={'test'}>
//       <img
//         src={'https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg'}
//         alt={'cat'}
//       />
//     </ImageWrapper>
//   );
// }

export default App;

// import Greeting from './components/Greeting';
// class App extends Component {
//   // rconst
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'Vasia',
//       isGreeting: true,
//     };
//   }

//   // Дописать в стейт isGreeting и передавать в пропсы

//   render() {
//     const { name, isGreeting } = this.state;
//     return <Greeting name={name} isGreeting={isGreeting} />;
//   }
// }
// //rcc

// export default App;

// function App() {
//   return <Greeting name="Vasia" />;
// }
// props = {name:"Vasia"}
// Greeting(props)
