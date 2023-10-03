package com.p8.io.employee.service.controller;

import com.p8.io.employee.service.model.Employee;
import com.p8.io.employee.service.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees(@RequestParam(required=false)String firstName) {
        try{
            List<Employee> employeeList = new ArrayList<>();
            if(firstName == null) {
                employeeRepository.findAll().forEach(employeeList::add);
            } else {
                employeeRepository.findByFirstName(firstName).forEach(employeeList::add);
            }

            if(employeeList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(employeeList, HttpStatus.OK);

        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id")String id){
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if(employeeOptional.isPresent()){
            return new ResponseEntity<>(employeeOptional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @PostMapping("/employees")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {

        try {
            Employee newEmployee = Employee.builder()
                    .id(employee.getId())
                    .firstName(employee.getFirstName())
                    .lastName(employee.getLastName())
                    .emailId(employee.getEmailId())
                    .build();
            employeeRepository.save(newEmployee);
            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable("id")String id) {

        try {
            Optional<Employee> employeeOptional = employeeRepository.findById(id);
            if(employeeOptional.isPresent()) {
                Employee existingEmployee = employeeOptional.get();
                existingEmployee.setId(employee.getId());
                existingEmployee.setFirstName(employee.getFirstName());
                existingEmployee.setLastName(employee.getLastName());
                existingEmployee.setEmailId(employee.getEmailId());
                return new ResponseEntity<>(employeeRepository.save(existingEmployee), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable("id")String id){
        try{
            employeeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
