package com.usermanagement.user_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
