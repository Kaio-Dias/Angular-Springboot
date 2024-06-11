package com.usermanagement.user_system.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanagement.user_system.model.ServiceModel;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceModel, Integer>{
    
}
