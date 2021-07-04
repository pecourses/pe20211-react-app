import './App.css';
import React from 'react';
import ComponentDisabler from './components/ComponentDisabler';

// rfce
function App() {
  return <ComponentDisabler />;
}

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
