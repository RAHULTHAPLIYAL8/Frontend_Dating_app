import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin.jsx';
import Signup from "./Components/Signup.jsx"
import Match from './Components/Match.jsx';
import List from "./Components/List.jsx"
import AddDetails from "./Components/AddDetails.jsx"
import Dashboard from "./Components/Dashboard.jsx"
import Login from "./Components/Login.jsx"
import Forgot from "./Components/Forgot.jsx"
import RemoveDetails from './Components/Remove_Details.jsx';
import Add_Details from './Components/Add_Admin_Details.jsx';
import AdminForm from './Components/Admin_Form.jsx';

import './App.css';
import Admin from './Components/Admin.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/signup" element={<Signup/>} /> */}
        <Route path="/signup" element={<Signup/>} />
        <Route path="/match" element={<Match/>} />
        <Route path="/list" element={<List/>} />
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path="/details/:id" element={<AddDetails/>} />
        <Route path="/dashboard/:email/:status" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/removedetails" element={<RemoveDetails/>}/>
        <Route path="/admin/adddetails" element={<Add_Details/>}/>
        <Route path="/admin/login" element={<AdminForm/>}/>
    
        

      </Routes>
    </BrowserRouter>
    
  );
}
export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signin from './Components/Signin.jsx';
// import Signup from "./Components/Signup.jsx";
// import AddDetails from './Components/AddDetails.jsx';

// import './App.css';
// import Dashboard from './Components/Dashboard.jsx';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup/>} />
//        
       
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
