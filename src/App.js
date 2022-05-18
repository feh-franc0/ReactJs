import React, { useEffect, useState } from 'react';
import Header from './Header';
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Login", "sobre"]}></Header>
      <Counter count={1}></Counter>
    </div>
  );

  //! - 

  // const [show, setShow] = useState(true);

  // let time = 0;

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     time++;
  //     console.log(time)
  //     if (time>=10) {
  //       clearInterval(timer);
  //       setShow(false);
  //     }
  //   }, 1000)
  // }, [])


  // if (show) {
  //   return(
  //     <div>
  //       <Counter count={3}></Counter>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       Sem Contador
  //     </div>
  //   );
  // }
}

export default App;
