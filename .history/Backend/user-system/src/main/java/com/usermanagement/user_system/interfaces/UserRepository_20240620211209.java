package com.usermanagement.user_system.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanagement.user_system.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {
    //access database and save client user information
}
