package com.test.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3002","http://localhost:3001", "http://localhost:4200" })
@RestController
public class EmployeeResource {

    @Autowired
    RestTemplate restTemplate;


    public List<Employee> getAllEmployees(){


     R<Employee> employeeList =    restTemplate.getForEntity("http://dummy.restapiexample.com/api/v1/employees",Employee.class);
        return null;
    }
}
