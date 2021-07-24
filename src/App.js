import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import UsersLoader from './components/UsersLoader';
import PhonesProvider from './components/PhonesProvider';
import UsersProvider from './components/UsersProvider';
import DataProvider from './components/DataProvider';
import MouseTracker from './components/MouseTracker';

// ===== Рендер-пропсы ===========================
function Cat(props) {
  const { x, y } = props;
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: '150px',
          height: '100px',
        }}
        alt="cat"
        src="data:image/jpeg;base64,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"
      />
    </div>
  );
}

const App = () => <MouseTracker myRender={coords => <Cat {...coords} />} />;

// const App = () => {
//   const usersRender = ({ data, isFetching, error }) => {
//     return (
//       <>
//         {isFetching && <div>Loading...</div>}
//         {error && <div>ERROR</div>}
//         <ul>
//           {data.map(u => (
//             <li key={u.id}>
//               <img src={u.src} />
//               {u.firstName} {u.lastName}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   };

//   // return <DataProvider fileName="/users.json" render={usersRender} />;
//   return (
//     <>
//       <DataProvider fileName="/users.json">
//         {({ data, isFetching, error }) => {
//           return (
//             <>
//               {isFetching && <div>Loading...</div>}
//               {error && <div>ERROR</div>}
//               <ul>
//                 {data.map(u => (
//                   <li key={u.id}>
//                     <img src={u.src} />
//                     {u.firstName} {u.lastName}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           );
//         }}
//       </DataProvider>
//       <DataProvider fileName="/phones.json">
//         {({ data: phones, isFetching, error }) => {
//           return (
//             <>
//               {isFetching && <div>Loading...</div>}
//               {error && <div>ERROR</div>}
//               <ul>
//                 {phones.map(p => (
//                   <li key={p.id}>
//                     {p.brand} {p.model}: {p.price}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           );
//         }}
//       </DataProvider>
//     </>
//   );
// };

// ===== Routing =================================

// function App() {
//   /* ДОПИСАТЬ МАРШРУТЫ ДЛЯ ДВУХ ДРУГИХ КОМПОНЕНТОВ */
//   return (
//     <>
//       <PageHeader />
//       <Router>
//         <ul>
//           <li>
//             <Link to={'/'}>Home</Link>
//           </li>
//           <li>
//             <Link to={'/components'}>Components</Link>
//           </li>
//           <li>
//             <Link to={'/contacts'}>Contacts</Link>
//           </li>
//           <li>
//             <Link to={'/about'}>About</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route exact path={'/'}>
//             <HomePage />
//           </Route>
//           <Route path={'/components'}>
//             <ComponentsPage />
//           </Route>
//           <Route path={'/contacts'}>
//             <ContactsPage />
//           </Route>
//           <Route path={'/about'}>
//             <AboutPage />
//           </Route>
//           <Route path={'*'} component={NotFound} />
//         </Switch>
//       </Router>
//       <PageFooter />
//     </>
//   );
// }

// function PageHeader() {
//   return <div>Header</div>;
// }
// function PageFooter() {
//   return <div>Footer</div>;
// }

// function ComponentsPage() {
//   const { path, url } = useRouteMatch();

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={`${url}/greeting`}>Greeting</Link>
//         </li>
//         <li>
//           <Link to={`${url}/counter`}>Counter</Link>
//         </li>
//         <li>
//           <Link to={`${url}/calendar`}>Calendar</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path={`${path}/greeting`}>
//           <Greeting name={'Test'} />
//         </Route>
//         <Route path={`${path}/counter`}>
//           <Counter />
//         </Route>
//         <Route path={`${path}/calendar`}>
//           <Calendar />
//         </Route>
//         <Route path={`${path}/*`} component={NotFound} />
//       </Switch>
//     </div>
//   );
// }

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
