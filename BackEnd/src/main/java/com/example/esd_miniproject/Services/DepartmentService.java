package com.example.esd_miniproject.Services;

import com.example.esd_miniproject.Entities.Department;

public interface DepartmentService {

    boolean isAvailable(int deptId);

    Department getDeptByDeptName(String dname);
}
