package com.usermanagement.user_system.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.usermanagement.user_system.interfaces.UserRepository;
import com.usermanagement.user_system.model.UserModel;
//service dependency from repository
@Service
public class UserService {
    private UserRepository userRepository;
    
    public UserService(UserRepository repository) {
        this.userRepository = repository;
    }

    public void saveClient(UserModel user){
        validateClient(user);
        this.userRepository.save(user);
    }

    public List<UserModel> getAllUsers(){
        return userRepository.findAll();

    }

    public void validateClient(UserModel user){

    }
}
