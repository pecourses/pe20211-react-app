import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import Stopwatch from './components/Stopwatch';
import HomePage from './page/HomePage';

// ===== Routing =================================

function App() {
  /* ДОПИСАТЬ МАРШРУТЫ ДЛЯ ДВУХ ДРУГИХ КОМПОНЕНТОВ */
  return (
    <>
      <PageHeader />
      <Router>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/components'}>Components</Link>
          </li>
          <li>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/components'}>
            <ComponentsPage />
          </Route>
          <Route path={'/contacts'}>
            <ContactsPage />
          </Route>
          <Route path={'/about'}>
            <AboutPage />
          </Route>
        </Switch>
      </Router>
      <PageFooter />
    </>
  );
}

function PageHeader() {
  return <div>Header</div>;
}
function PageFooter() {
  return <div>Footer</div>;
}

function ComponentsPage() {
  return (
    <div>
      Components page:
      {/* <Router>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/counter'}>Counter</Link>
          </li>
          <li>
            <Link to={'/calendar'}>Calendar</Link>
          </li>
          <li>
            <Link to={'/stopwatch'}>StopWatch</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={'/'}>
            <Greeting name={'Test'} />
          </Route>
          <Route path={'/counter'}>
            <Counter />
          </Route>
          <Route path={'/calendar'}>
            <Calendar />
          </Route>
          <Route path={'/stopwatch'}>
            <Stopwatch />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

// === window.innerSizes =======================================
// function App() {
//   return <VeiwPortParams />;
// }

// === prop children ====================
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
