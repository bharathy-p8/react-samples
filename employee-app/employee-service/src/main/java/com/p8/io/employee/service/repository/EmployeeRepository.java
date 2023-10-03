package com.p8.io.employee.service.repository;

import com.p8.io.employee.service.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
    List<Employee> findByFirstName(String firstName);
}
