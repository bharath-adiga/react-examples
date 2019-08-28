package com.test.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;

import java.util.Objects;

public class Employee {

      private Integer id;
      private String employeeName;
      private Integer employeeSalary;
      private Integer employeeAge;
      private String profileImage;

    public Employee() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) &&
                Objects.equals(employeeName, employee.employeeName) &&
                Objects.equals(employeeSalary, employee.employeeSalary) &&
                Objects.equals(employeeAge, employee.employeeAge) &&
                Objects.equals(profileImage, employee.profileImage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, employeeName, employeeSalary, employeeAge, profileImage);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public Integer getEmployeeSalary() {
        return employeeSalary;
    }

    public void setEmployeeSalary(Integer employeeSalary) {
        this.employeeSalary = employeeSalary;
    }

    public Integer getEmployeeAge() {
        return employeeAge;
    }

    public void setEmployeeAge(Integer employeeAge) {
        this.employeeAge = employeeAge;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}
