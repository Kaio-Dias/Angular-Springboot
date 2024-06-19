package com.usermanagement.user_system.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usermanagement.user_system.model.UserModel;
public interface UserRepository extends JpaRepository<UserModel, Integer> {
    //access database and save client user information
}
