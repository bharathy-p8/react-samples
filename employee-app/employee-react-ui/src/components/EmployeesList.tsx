import React from 'react'
import IEmployeeData from '../types/Employee'

type employeeProps = {
    employee : IEmployeeData
} []

const EmployeesList = ( employees : employeeProps) => {
  console.log(employees);
  return (
   <h1> Employee List</h1>
   
  )
}

export default EmployeesList
