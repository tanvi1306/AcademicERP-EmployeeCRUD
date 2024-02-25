package com.example.esd_miniproject.Services;

import com.example.esd_miniproject.Entities.Department;
import com.example.esd_miniproject.Entities.Employee;
import com.example.esd_miniproject.Repository.DepartmentRepository;
import com.example.esd_miniproject.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository er;

    @Autowired
    private DepartmentRepository dr;

    @Override
    public void addEmployee(Employee e) {
        er.save(e);
    }

    @Override
    public Optional<Employee> viewEmployee(int empId) {
        return er.findById(empId);
    }

    @Override
    public void deleteEmployee(int empId) {
       Optional<Employee> e = er.findById(empId);
       Department d = e.get().getD();
       d.setCapacity((d.getCapacity())+1);
       dr.save(d);
        er.deleteById(empId);
    }

    @Override
    public List<Employee> viewAllEmployees() {
        return er.findAll();
    }

    @Override
    public void updateEmployee(Employee e) {
        Optional<Employee> e1 = er.findById(e.getId());
        e1.get().setFname(e.getFname());
        e1.get().setLname(e.getLname());
        e1.get().setMail(e.getMail());
        e1.get().setTitle(e.getTitle());
        e1.get().setPhotopath(e.getPhotopath());
        er.save(e1.get());

    }
}
