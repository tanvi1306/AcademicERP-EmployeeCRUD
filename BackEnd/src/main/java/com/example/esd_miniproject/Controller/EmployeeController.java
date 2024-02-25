package com.example.esd_miniproject.Controller;

import com.example.esd_miniproject.Entities.Department;
import com.example.esd_miniproject.Entities.Employee;
import com.example.esd_miniproject.Repository.DepartmentRepository;
import com.example.esd_miniproject.Repository.EmployeeRepository;
import com.example.esd_miniproject.Services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/emp")
public class EmployeeController{

    @Autowired
    private EmployeeService s;

    @Autowired
    EmployeeRepository er;
    @Autowired
    private DepartmentController dc;
    @Autowired
    private DepartmentRepository dr;

    @PostMapping("/Add")
    public  void addEmployee(@RequestBody Employee e,@RequestParam String dname)
    {
        System.out.println(dname);
        Department d = dc.getDeptByDeptName(dname);
        e.setD(d);
        if(dc.isAvailable(d.getId()))
        {
            s.addEmployee(e);
        }
        else {
            System.out.println("Not Available!");
        }
    }
    @GetMapping("/View")
    public Optional<Employee> viewEmployee(@RequestParam int empId)
    {
       return s.viewEmployee(empId);
    }

    @GetMapping("/ViewAll")
    public List<Employee> viewAllEmployees()
    {
        return s.viewAllEmployees();
    }

    @PutMapping("/Delete")
    void deleteEmployee(@RequestParam int empId)
    {
       s.deleteEmployee(empId);

    }

    @PutMapping("/Update")
    void updateEmployee(@RequestBody Employee e)
    {
        s.updateEmployee(e);
    }

}
