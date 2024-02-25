package com.example.esd_miniproject.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@NoArgsConstructor  // Lombok annotation for no-args constructor
@AllArgsConstructor // Lombok annotation for all-args constructor
@Data

@Entity
@Table(name = "departments")
public class Department {
    @Id
    @Column(name = "dept_id")
    private int id;
    @Column(name = "dept_name",nullable = false)
    private String name;

    @Column(name="dept_capacity",nullable = false)
    private int capacity;

    @JsonIgnore
    @OneToMany(mappedBy = "d",cascade = CascadeType.ALL)
    private List<Employee> employees;
}
