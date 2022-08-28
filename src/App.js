import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import LeaveStatus from "./pages/LeaveStatus";
import ApplyLeave from "./pages/ApplyLeave";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/apply-leave" element={<ApplyLeave />}></Route>
          <Route path="/leave-status" element={<LeaveStatus />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
