package com.usermanagement.user_system.controller;

//import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.usermanagement.user_system.interfaces.UserRepository;
import com.usermanagement.user_system.model.UserModel;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;






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

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserModel findById(@PathVariable Integer id){
        return repository
        .findById(id)
        .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserModel save(@RequestBody UserModel user) {
        return repository.save(user);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository
        .findById(id)
        .map( user -> {
            repository.delete(user);
            return void.class;
        })
        .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    
    @PutMapping("path/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Integer id, @RequestBody UserModel userUpdated){
        repository
        .findById(id)
        .map( user -> {
            user.setUsername(userUpdated.getUsername());
            user.setCpf(userUpdated.getCpf());
            return repository.save(userUpdated);
        })
        .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        
    }
}
