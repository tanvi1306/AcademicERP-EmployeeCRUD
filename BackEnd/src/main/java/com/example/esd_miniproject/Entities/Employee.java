package com.example.esd_miniproject.Entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.IdGeneratorType;
import org.springframework.beans.factory.annotation.Autowired;

@NoArgsConstructor  // Lombok annotation for no-args constructor
@AllArgsConstructor // Lombok annotation for all-args constructor
@Data
@Entity
@Table(name = "employees",uniqueConstraints = {@UniqueConstraint(columnNames = "emp_mail")})
public class Employee {

    @Id
    @SequenceGenerator(name = "emp_id",sequenceName = "empid_seq",allocationSize = 1,initialValue = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "emp_id")
    @Column(name = "emp_id")
    private int id;
    @Column(name = "emp_fname",nullable = false)
    private String fname;
    @Column(name = "emp_lname")
    private String lname;
    @Column(name = "emp_mail",unique = true,nullable = false)
    private String mail;
    @Column(name = "emp_title")
    private String title;
    @Column(name = "emp_photopath")
    private String photopath;

    @ManyToOne
    @JoinColumn(name = "emp_dept_id")
    private Department d;
}
