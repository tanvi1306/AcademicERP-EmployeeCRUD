package com.example.esd_miniproject.Services;

import com.example.esd_miniproject.Entities.Department;
import com.example.esd_miniproject.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService
{

    @Autowired
    private DepartmentRepository dr;

    public boolean isAvailable(int deptId)
    {
        int capacity = getCapacity(deptId);
        if(capacity>0)
        {
            updateCapacity(deptId,true);
        }
        return capacity>0;
    }

    @Override
    public Department getDeptByDeptName(String dname) {
        return dr.findByName(dname);
    }


    public int getCapacity(int dept_id) {

        Optional<Department> d =dr.findById(dept_id);
        return d.get().getCapacity();
    }
    public void updateCapacity(int dept_id,boolean add)
    {
        Optional<Department> d =dr.findById(dept_id);
        int new_capacity=d.get().getCapacity();
        if(add)
        {
            new_capacity-=1;
        }
        else {
            new_capacity += 1;
        }
        d.get().setCapacity(new_capacity);
        dr.save(d.get());
    }
}
