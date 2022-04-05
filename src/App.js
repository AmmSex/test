import React from "react";

import './App.css'
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

function App({state, dispatch}){
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav />
        <div>
        <Routes>
          <Route path='/profile' element={<Profile text={state.profile.text} valueTextarea={state.profile.valueTextarea} dispatch={dispatch}/>}/>
          <Route path='/dialog/*' element={<Dialogs items={state.dialogs.items} mes={state.dialogs.updateNewMessage} message={state.dialogs.message} dispatch={dispatch}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;















// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 0
//     };
//   }

//   handleYear = (value)  => {
//     this.setState({ years: value });
//   }

//   render() {
//     return (
//       <div className="App">
//         <FilterYear
//           onHandleYear={this.handleYear}
//           stateYear={this.state.years}
//         />
//       </div>
//     );
//   }
// }


// https://vc.ru/dev/133379-5-otlichiy-mezhdu-obychnymi-i-strelochnymi-funkciyami