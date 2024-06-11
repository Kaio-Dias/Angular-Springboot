package com.usermanagement.user_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@ComponentScan(basePackages = { "com.usermanagement.user_system.repository", 
                                "com.usermanagement.user_system.service"
                            })
@RestController
public class UserController {
    
    @Autowired
    @Qualifier("applicationName")   
    private String applicationName;

    @GetMapping("/hello")
    public String HelloWorld(){
        return applicationName;
    }
}
