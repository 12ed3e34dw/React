import logo from './logo.svg';
import './App.css';
import ChatWrapper from "./components/ChatWrapper";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
             <ChatWrapper/>
             <ToastContainer/>
    </div>
  );
}

export default App;
