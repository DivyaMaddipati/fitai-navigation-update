// export default App;
// // import React, { useState } from 'react';
// // import './App.css';
// // import { Body } from './Components/Body';
// // import { Shop } from './Components/Shop';
// // import WebcamComponent from './Components/Webcam';
// // import { Header } from './Components/Header';
// // import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';

// // function App() {
// //   const [isCamClicked, setIsCamClicked] = useState(false);

// //   const handleButtonClick = () => {
// //     setIsCamClicked(true);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <header className="App-header">
// //           <Header /><br></br>
// //           <button className="btn btn-primary center-button"
// //             onClick={handleButtonClick}
// //             disabled={isCamClicked}
// //           >
// //             {isCamClicked ? 'Scanning...' : 'Try New Fit AI'}
// //           </button>
// //         </header>

// //         <BrowserRouter>
// //           <Route path="/shop" component={Shop} />
// //           <Route path="/webcam" component={WebcamComponent} />
// //           <Route path="/" component={Body} />
// //         </BrowserRouter>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Body } from './Components/Body';
import SignIn from './Components/SignIn';
import { Header } from './Components/Header';
import SignUpForm from './Components/SignUpForm'; 

function App() {

  return (
    <div className="App">

        <BrowserRouter>
                <Header />

                <Routes>

                    <Route path="/" element={<Body />}/>
                    <Route path="/signin" element={<SignUpForm />}/>
                    <Route path="/login" element={<SignIn />}/>

                </Routes>


        </BrowserRouter>
                
    </div>
  );
}

export default App;
