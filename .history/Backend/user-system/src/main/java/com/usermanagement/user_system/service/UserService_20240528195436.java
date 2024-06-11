package com.usermanagement.user_system.service;

import org.springframework.stereotype.Service;

import com.usermanagement.user_system.model.UserModel;
import com.usermanagement.user_system.repository.UserRepository;
//service dependency from repository
@Service
public class UserService {

    public void saveClient(UserModel user){
        validateClient(user);
        UserRepository userRepository = new UserRepository();
        userRepository.persist(user);
    }

    public void validateClient(UserModel user){

    }
}
