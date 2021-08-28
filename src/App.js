import './App.css';
import React, { useState, Component, useContext } from 'react';
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
import { ThemeContext, UserContext } from './contexts';
import UserPage from './pages/UserPage';
import LogInForm from './components/forms/LogInForm';
import Carousel from './components/Carousel';
import MouseClickerH from './components/MouseClickerH';
import CounterH from './components/CounterH';
import ClickerH from './components/ClickerH';
import ComponentDisablerH from './components/ComponentDisablerH';
import UsersLoaderH from './components/UsersLoaderH';
import StopwatchH from './components/StopwatchH';
import TodoPage from './pages/TodoPage';
import CounterWithThemeH from './components/CounterWithThemeH';
import CONSTANTS from './constants';
// ===== Hooks ========================================

// const App = () => <MouseClickerH />;
// const App = () => <ClickerH />;
// const App = () => <ComponentDisablerH />;
// const App = () => <UsersLoaderH />;
// const App = () => <StopwatchH />;
// const App = () => <TodoPage />;

const App = () => {
  const themes = useState(CONSTANTS.THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={themes}>
      <CounterWithThemeH />
    </ThemeContext.Provider>
  );
};

// ===== Formik ===================================

// const App = () => <LogInForm />;

// ===== Carousel ===================================

// info from https://esahubble.org/images/archive/top100/
// const slides = [
//   {
//     src: "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2017a.jpg",
//     title: "Hubble’s Crisp New Image of Jupiter and Europa",
//     description:
//       "This latest image of Jupiter, taken by the NASA/ESA Hubble Space Telescope on 25 August 2020, was captured when the planet was 653 million kilometres from Earth. Hubble’s sharp view is giving researchers an updated weather report on the monster planet’s turbulent atmosphere, including a remarkable new storm brewing, and a cousin of the Great Red Spot changing colour — again. The new image also features Jupiter’s icy moon Europa.",
//   },
//   {
//     src: "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg",
//     title: "Tapestry of Blazing Starbirth",
//     description:
//       "This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.",
//   },
//   {
//     src: "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg",
//     title: "Westerlund 2 — Hubble’s 25th anniversary image",
//     description:
//       "This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science.",
//   },
// ];
// const App = () => <Carousel slides={slides} />;

// ===== Context ===================================
// p -> ch: props
// p <- ch: callback
// ch<->ch: parent (подъем состояния)
// // p -> ch ->ch->ch

// class App extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       user: {
//         firstName: 'Olimpia',
//         lastName: 'Tokio',
//         src:
//           'data:image/png;base64,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',
//       },
//       theme: 'LIGHT',
//     };
//   }

//   render () {
//     return (
//       // <ThemeContext.Provider value={this.state.theme}>
//       <UserContext.Provider value={this.state.user}>
//         <UserPage />
//       </UserContext.Provider>
//       // </ThemeContext.Provider>
//     );
//   }
// }

// const Parent = () => <Child />;

// const Child = () => {
//   const user = useContext(UserContext);
//   return JSON.stringify(user);
// };

// const Child = () => {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return JSON.stringify(user);
//       }}
//     </UserContext.Consumer>
//   );
// };
// App(Pr);
// UserPage;
// UserPageHeader(Cons);
// UserPageSidebar(Cons);

// ===== Рендер-пропсы ===========================
// function Cat(props) {
//   const { x, y } = props;
//   return (
//     <div style={{ position: 'relative', height: '100vh' }}>
//       <img
//         style={{
//           position: 'absolute',
//           left: x,
//           top: y,
//           width: '150px',
//           height: '100px',
//         }}
//         alt="cat"
//         src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYSEhIYGBIYGBISERIREhIRGBgZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjEhISE0MTQ0NDQ0NDQxMTQxNDQ0MTQ0NDQ0NDQ0NDExNDE0NDE0MTE0MTQ0MTQ0MTE/MTQxP//AABEIAL4BCQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD4QAAEDAgQDAwsCBAUFAAAAAAEAAhEDIQQSMUEFUWEicZEGExQyUoGSobHR8ELBI3Lh8RVTYrLSBzRDc6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAQEAAgMAAwEAAAAAAAAAARECEiEDMUEiUWET/9oADAMBAAIRAxEAPwDx5YmMpLWzCknRbKeCK8t6x6vHXM80s1ekvRDBJFbAJO0vDh06SeKa6LcEeSY3Ala8ong5zKKe3DSunTwS0nDZWk8gSsXtqcOKGNBgkA8kbmLznE6hzzJknYr2zMLIBI2H0V7njJf7Xi+Wz+nNY1MLF0W4NNGEXK9Oni4L2JT2L0D8ClOwCs7Z8XDbTTGsK7AwCY3AdEvUWcuO1hROpldoYIK/Q+iz5RfF559IpfmCvR+hDkibghyWv+jPg4VOgVpbSK7AwisYVYvetzlyRTKj6ZXY9GQejKTpccN1EqhRK73oqgwnRXyTxcIYUqxhCu+MKiGGTzTwedOBKr0FelGGVeihT/oeDy78CU6jgyvQ+ijkrbhk/wCi+DiDCq/Rei7no6no6ea+LLTwg5LSzDhamsRhqxe1nLKKCB2GC3wpkUnR4ue3Cohhgt+RXlTyp4xjbQWfioDaTydIi3VdQhY+KD+E+fZK1z17h1PVfL+IsgzebfVe/wCBVTUoseYkiD3iy8NxRlr/AC5L2HkS+cPHsucvZ88349eX4r/PHdbRRCknBWvDr2EGkhdRWlRNRmFFEKSeFE1SfNKeaWiVUqBHm1PNpypSheRDkTiUKBeVTImKpVgoMVhisFXKAcqsMVlyqUsEyq8qqVJUwVlUhU4qsyYDVIcyrMho5VoAVcrWM6MFEClypmVw0yVJScyvMniaZKTiWSxwOhafojlSUkypr5rxWn2eeo9y6vkHVh1RnRpjuJlJ4zh4c9vImO7WPBc/yaxOTEtkwD2T3FfRs8vjseSXx7lfSwVYKEK187Hs0Uq0MqZlLDRKpQypKSGjlRBKsFXDRKkJKmZSxdEqVFyrMmGiVFVmVSmGiVocymZMTVoSVC5UXK4aNSUGZTMmGoUJChcqLkw1akoC5DmTDRh6svSQVYXTHPTsyolCFJTDVyiDkslWCmGmSpKAlDKYa4HlDT7YOzgL9QvG12mnUDuR/qF7vygpyxruR+q8rxuj2cw6L2fDfUef5J9ve4HFB7GvGjgCtAevJeSGPlhpk3Fx3L0udeb5OPHqx2468uZWgvUzrPnUD1zsb1olXmSA5ECk5NNLkPnEBSyVcTT86oPSpUUw00vQ5kKuExdFmUzIIUKuGjzKs6WVRUxNML1WZAAoSrhpmZVmSiUOZDTXPQl6BLeUw01z0HnECkK+JrQCiCBiMlVBZlCUoOV5lKCcVGlDKIK6LLlGqkbAseS4Rj2ZmOHReG4mTEbcuoXvcS4BpJ0heL4hSME98Tv0Xq+C+nH5J7c3yfxGSq0jchvcDZfQsw0m/JfL6BLHjoQtzX1g4YkF2d5Lswn1ZsORAGy6fNx5ZWPi6zY+hBEubw/jFN7Gvc5rHEDM0n1XbjuW12KYP1st1C8l46/p3nU/s17w0FziA0AkkmAANyqwGKZVaHsdmYSRNxcdCvIeUXFxVd5imZpggvcP1nZo6Lq+R7MjKjQZGdjve5gB/wBoW78dnHlSdS9ZHpS1AWIw9UXLh5OniXlRQpKolWXUwWVXCFjkwpphRVwqRQl6XCnKAKOUamkgiEsq3FUmlgCo1qhRtTTEypL2rRKBwVlSwprUWVGorqYjVHIGOTWtWdUEKoTHBCmotoVlW1U9yVYjU0FIYUZOW50F1mc6bhWPaCwiYnRcGvTaddFuqYgvud9uQ2SXsnkvZ8c8ZlcO75OY7CMnNlGmo5a3Xm/8UJAYIaGEgQYaf5o36r1XEyGMIBl5BA00g3XimUn5gDoTaRML0Xrycs8Wol4GbQ5gD3EOI/dacWx4ae02RcgGbLPisS1rCyCQYuQRAmZE7a+JTcTQcMOKxkFzspBNpblifzdOdS4z4OmQ3zjjA0AI1d7XWNuvcvW+RFfMyrMznGuuXKP6ryrquZjXZCGtgBxBLWnvIiTzXU8jquWs4FzjnadTNwRH7rHzc7zV+PrOo97KouQNKOF8+x7NWxyslKcYTGmVmbFlExMcVTQqatIJgUeUUpZRQBWEL7KMKlSI9qiaUtyLQQrhWqlWJVhC5EVCtAJUQOKmZE0VBieLJTXIyVmrEeUDVYCpPxBIHIylOKbq4Ntlnx9ewaN9egGqYCvOcXxbg8gerOWeq6fHztY6uR0GCSTOloQYytkbO/M7LFwevnc5vI9yT5Tvhlp156Bej9xz/Nc+piszi8+rcSTHQxzXMqPBdqBrB2BWnDszAWmL3IDY3J6LtYTyf883PRyOIsaeVjACNS1zmOLhfkulsjnlrkYLE1KobS82KxIZTBJcZaPVaNgdpXpf+oHDhRZRY0tcGAte23accpzR3t+a9F5LYJlAOe+lFUEZS5gDgN8oH1svL+W+GdWql7GVJtqS0T+ow65000V56m+kvPr28riuIPe3JDQCQSGA9ogQDE8uS3eTLD59tiLONwRy5o+GYZzmZQHOMmS2wp8y7tAH3K8NimU6jSwsflMOcS8OcSYNjst98/wuMc3+Ue6ATENN0gH3o4Xy/wDHvxRRRyVQiBhRRt0QtMIc6JzoCKp5QypKmdIijdXMJbSiIVsSLD0WyBqJzrJiglDKJE0QrPSVRVEq5QuVC3lKlNa1XCqLY66aHLNTTWuWftnRuegaUoOko5ulhpj3pYQVHqybKY1pdatlBI2BXlsYS5jidS8kbbL0mLouNN2WzjMdQuBjKZyAfq1+67/FmOfdZfJ6oWVDJNwd5kpvFMz2lp1k392iyEBmU3m82uuli6mYTAFgRz0Xb91ifTgh2RoJBcRfLMNkaF3MLRg+JvpTUzu84bRsOTY0AEzHu5p7cOHBwHKR7rkLi1mXI0ADj3lavskx6jB+WzyA18Ru4331+S2Y7jDXAPe/MADAi5A/Svng31/CJ/dW6qYAJJAJ35/2VnMjnerXX4pxt7+yzsUxoBZBgnF72h05pb2ud9x+6xMveB4rs+TlHNWbO0n9lb1ktJz7fQMNZoCe1yzBPY8QvnY9erc5Lc9SrdKapL6pvtoZdW9XTIAWUv7R5KT2tuNLRaUkuVOfshzhasTTpRkJVMyQhqvjRATH3hHXdAWcSCEOIeTZaSU2i5Nc6yz03K2O1Wf1dNpPlR+qTRf2oTHbqbtULHboswQAwI96VnW2UfUhW2pbqsD68W3SxUM96vPLNrp03brQQudhak9R9lrL+0VLFlMcwK3nRLZUzHKNZTKg7Ou3yWWkdfuiF5viDC1wBkEbkbc13mv2TPLjh38NlekQSWU2uYfVgDURoV1+P1rPTxJxLM5YSJOh/ZPdT/UDaLQm8L4Awsz1BNQumAezHLquszh7SeycvTYLte5zcrnzNjzuGxADww6ult+qwcRYZI93uXb4vhizRvqkEPA5c1zuMvHZc39Qzd3P5rfPUv0WY87WZE7amOhWepsum8nUw6bQbclkr4cjYxGuy3HKxeHe02JM7QvUeSrJqE7Bpv7wuRw3BElrWsqVKjhIbTaC/wAPcV3uBYepTeS5lRjHjsmozKHEciLbqde+biyZZr1b32so2pAHX8+3ikh+3zVUnSSDoIHdaft4Lw49GnPqWUw75BKz1nbArTTp5We6VPHD7oGPJHihZJMqqMd32Vt16HRLMX7W1xvyQNfPRFVcBYJdQgmBoLnvSBzHmR3hEwgm/es7H/P8haQzK0czqrYLc+8+Cz4p/JNJz2CW9l0vo/DKAkRuhD7HvS/PajolioMsDWbqYlp9MwZ3T6lSLlZPOR3hWKmYwdvwpi76OJ1PX5JN+St4MA9fknZhz+SvtNcJ75E7qNfmM6QI5fhWZxOUcjmv3QkVHds8gLcxMXXo8XPXQpYiHdAD9brZWrHNOghv0v8ANcKg+DB3MeP9l1swIaN+zNjsYP1WOufekrdgqkkvWyvtfUCyxUGhjXTYmOmpP570Rqy/+VoF9ibrjft0no3cxumVcc40zSd2qcRmOo7liq1BIHK/e4nRFXaYA3ImPerChDQBlZtp+6jKkaa6HqgqsyggesQAR0PJLpPLJMTpHPKbFavuakam1AbG+0LzHHcLkeIEAi0R6vJegMBznaAgxOzoScRTbVaA8dxmCIGv51WuOvH2nXt4msyPf8gu/wAH8mq+IoOexgbTExUe+AXaQOaqtwZ7LkB4g9puo7wvUu4+xjKGGpasZ2mgEgS3M6es5l384x41zOB8UHDqxZiKbTmY1jarZIbTkWECTJ1Xbr8fZiHODJczL60GC7YAaCF53EYJ1UB9ftEeqwH1QdS4793Rb2Ma2A2GgwIAtAWevlkv8VnOz2bVfcjU8vp4pjOyHA67nmdymNw3az/y/SEpt55HMPcDK8/+umEMEk98LqYhhazuA6JVKkARblfW5T+IgkBugMSUt9kjkNeZ159YG61vIA12kShNICwuN+4f3Vvp6E3ifdyS0iNbMzsbeE/uia0G3MJbSSTsARP28AnZtTpYx43KzzPZQU4EnYfVU+tIN/6Ss737aXk9d7fJExvqgDXXv2+/uWs9mmmtER0noIR54M80DWAx0i/tSD9kis+Sb6CepV+0tw8MJzHvWbN2o0G/uTxXLG9w/wDrUn6BLjNY7nUezJJ/ZJMmn2Fl3ctT3AJlIQQf02k/nvRU2ZmmLAQOpN7IKxIIbYQZnuuVcPppJs0fze8SlZXdEQeMma9p8JVedPRRXlWPMAHQb95sk1XwT7k2vaGyJ305LI943I8Rcr0T24VpY/tDvldXDVRmDrxeVwKFYEzI8QbLp0a4DQ49Tr8k6n41HZfiM78ptJ1GwA28EBeR2rxck/suWMQAc08t9BJsfktjK40dBB0HIu1J9y5Xn0unl5u60/onb81WtpyhrnQS1jYOszJHddYsM8OME2aYFxJuB85W6s0PfI0BggcwYHgI8Ssf41ulV2kub1M/8vnZQuIFtSC3pzC0VY0tmgkERAG4H5shawSNTMQSQpPorO9ssJ1BDRAG83+g8VVJl765REbDSO9OxLCDDJuZLiLXvbxTaFOCNCbTtvKv16XD2MLG3gkzpe9zAWXCgZ7gGWkSNc15j3JtarJIBsLTOms+IV4UDLmNvXM8m7AqLWWq7MZ0Frc7mflCczCk8pkxy1kA+PyVVKUNLjzJ1sfwrXTEtaSQZPin0T2fUsydIkSRuJKzYaOyNdZHu3WvFPGSOZgn/VYArPgABmJ2LvAaLP4v6exnbA6qsfNoublE11wehE9fz6JGPqw6dLe7+32U+61Sm2N7k/kJNWqZA6z0gbK3DcmO47zB91kL4Ik9BY8/6St4xTMNqJgiRbnf+pSseYuNJeI5nNp3Jk2EaSb79EOIpZg28DMT1uYt10Unul+mek2fWsLX3vc/t4IiYi9/odkyq9oJgaEgE6mIE92vgk1iBeR2bSTYEn5nQLaU9z4vuCO4TF47ifFZqTe3O1ievT3o2OEO0JFiY3zD9kFSoNosdz0n9/khUcCS5p9ot7t5PSPqqruIdGjcuuvh+bJweA2xBJloO4flMuPdZIkPh1i2Inu0j80SGN7KsASL6xNp5/usld9yHXcQZO0ai/WE9j82sdOWkLLaQ4kGCZFru5AKwpz5ylv+kkjkf0/IFK853J2JkMJzAuuCZHskwfFczzg9pqaPtvBMMw4agSxhPmaNyxpPqN6Lb6JT9in8DfskcD/7ah/6aP8Asat69ryM/olP/LZ8Dfsr9FZ7FP4W/ZPUQI9Ep/5dP4G/ZT0VnsU/hb9k9RAj0ZnsM+Bv2V+js9lvwj7JyimBPo7PYZ8DVPR2ewz4GpyiYOPXx+Ha5oIZBc5pdkEMc1rnGTHJp7ouircQw7S0dlxeSAGMzaCoZMDT+G8d4V1eDU3l5JeS7NPaAADmOaYAHJxub6XsFVLgdNrg4F4IcHDtCGiapyC3q/xanXta2EMFU+I4VzQ6WNBa18OZlIaYiRGtxbqFbsfhwWjskOc9uYM7ALGlzsxiABB94PIoafAaTTIzaUwScmY5C3IS6JsGtGsQNJujqcHpvLsxecznOIzAAhzXMc2ANCCb66XsmAK/EcO1hcMjoDjlDRMDWZHZ98LQ6tRDWuOTK8w0hoIcbnswL2BM8hKzu4HSh5Je7zgIqy4Hzw0GcRFha0W1lOPDGwwBzwGHsQ4SwGQWAkXEGLzoIgiUwA7iGF3fSieQ2i+mlxfS60UnUnBpb5shwJbZoLgNYGtt1lpcDpNM9skNDBLvVpNILWC2gyiN7mSVuw+FaxoDRoXEE3IL3Fxv3lMGI46kM38N3ZrMon+F/wCR+TK7o3ttuftOTE8cw7BmdTdE9kllOHt7XbaS647DresbQDInbU4UDn/iVRnqU6hjzVnsy5Y7Og82z4RzMqqcApHeoLFoh/q03B4dTbazTmd10giBFwJ/xvC9sFrW+be1hzim3M9z3MAEmxljjDoMCdLosRxSkxxY6g8OFxDcOQ8Q90g57dmm93agwOdkw+T1LnUEZg2H+ox2fMxsjQ+cfcyb2IgQ+rwmkWuY5uZjnNLmuhwIYBDL/phoEd/MpgxO4zhwHuDAWscxszh25nOmLOeC3Q+vlmLSuu2g0gHI0aWytt4LLU4YHOc4vqAuGWQ5vZpkklg7Oh6ydIIhbaTA1oAENAAA5ACAFMFejM9hnwN+yo4VnsM+Bv2T1EwJ9GZ7LPgb9lXozPYZ8DfsnqKhPozPZZ8Dfsq9GZ7DPgb9k9RAn0dnsM+Fqr0ZnsM+Bv2T1FMCPRmewz4G/ZT0VnsU/hb9k9RMH//Z"
//       />
//     </div>
//   );
// }

// const App = () => <MouseTracker myRender={coords => <Cat {...coords} />} />;

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
