import React from 'react'
import { Employee } from '../interfaces/Employee';

interface EmployeeListProps {
    employees : Employee[]
}

const handleDelete = ({id}) =>{
    console.log('Handle Delete button invoked'+{id})
}

const handleUpdate = () => {
    console.log('Handle Update Button Called')
}

const EmployeesList = ( {employees} : EmployeeListProps) => {
  return (
    <>
        <table>
            <tr>
                <th> Id </th>    
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
            </tr>
        </table>
        {employees.map((employee) => (
            <tr key={employee.id}>
                <th >{employee.id}</th>
                <th >{employee.firstName}</th>
                <th>{employee.lastName}</th>
                <th>{employee.emailId}</th>
                <button className=" bordered" onClick={() => handleDelete(employee.id)}>
                    <span className="icon-edit "></span>
                    Edit
                </button>   
                <button className=" bordered" onClick={() => handleUpdate()}>
                    <span className="icon-edit "></span>
                    Delete
                </button>                
            </tr>
          ))}
    </>
   
    );
}

export default EmployeesList
