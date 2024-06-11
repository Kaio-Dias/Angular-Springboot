package com.usermanagement.user_system.service;

import org.springframework.stereotype.Service;

import com.usermanagement.user_system.model.UserModel;
import com.usermanagement.user_system.repository.UserRepository;
//service dependency from repository
@Service
public class UserService {
    private UserRepository repository;
    
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public void saveClient(UserModel user){
        validateClient(user);
        this.repository.persist(user);
    }

    public void validateClient(UserModel user){

    }
}
