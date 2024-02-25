package com.example.esd_miniproject.Controller;

import com.example.esd_miniproject.Entities.Department;
import com.example.esd_miniproject.Services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController {

    @Autowired
    private DepartmentService ds ;

    boolean isAvailable(int deptId)
    {
        return ds.isAvailable(deptId);
    }

    public Department getDeptByDeptName(String dname)
    {
        return ds.getDeptByDeptName(dname);
    }



}
