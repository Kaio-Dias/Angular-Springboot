package com.usermanagement.user_system.controller;

//import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.usermanagement.user_system.interfaces.UserRepository;
import com.usermanagement.user_system.model.UserModel;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@ComponentScan(basePackages = { "com.usermanagement.user_system.repository", 
                                "com.usermanagement.user_system.service"
                            })
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository repository;
    
    public UserController(UserRepository repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserModel save(@RequestBody UserModel user) {
        return repository.save(user);
    }
    
}
