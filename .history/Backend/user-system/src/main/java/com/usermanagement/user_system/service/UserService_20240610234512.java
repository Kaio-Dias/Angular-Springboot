package com.usermanagement.user_system.service;

import org.springframework.stereotype.Service;

import com.usermanagement.user_system.interfaces.UserRepository;
import com.usermanagement.user_system.model.UserModel;
//service dependency from repository
@Service
public class UserService {
    private UserRepository repository;
    
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public void saveClient(UserModel user){
        validateClient(user);
        this.repository.save(user);
    }

    public void validateClient(UserModel user){

    }
}
