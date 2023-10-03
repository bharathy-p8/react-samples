import React from "react"
import { useEffect, useState } from "react";
import { EmployeeService } from "./services/EmployeeService";
import { Routes, Route, Link } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC =() => {

  const [ employees, setEmployees] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
    .then(response => response.json())
    .then(data => setEmployees(data))
  },[])

  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/employees"} className="nav-link">
            P8 Employee Management
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add Employee
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<EmployeesList employees={employees}/>} />
        <Route path="/employees" element={<EmployeesList employees={employees}/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App
