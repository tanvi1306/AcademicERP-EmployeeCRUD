package com.example.esd_miniproject.Repository;

import com.example.esd_miniproject.Entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    public Department findByName(String dname);
}
