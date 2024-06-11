package com.usermanagement.user_system.repository;

import org.springframework.stereotype.Repository;

import com.usermanagement.user_system.model.UserModel;

@Repository
public class UserRepository {
    public void persist(UserModel user){
        //access database and save client user information
    }
}
