package com.example.esd_miniproject.Services;

import com.example.esd_miniproject.Entities.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    void addEmployee(Employee e);

    Optional<Employee> viewEmployee(int empId);

    void deleteEmployee(int empId);

    List<Employee> viewAllEmployees();

    void updateEmployee(Employee e);
}
