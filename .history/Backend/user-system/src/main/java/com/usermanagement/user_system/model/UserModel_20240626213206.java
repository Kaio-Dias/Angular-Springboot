package com.usermanagement.user_system.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String username;

    @Column(nullable = false, length = 11)
    private String cpf; 

    @Column(nullable = false, name = "registered_date")
    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate registeredDate;

    @PrePersist
    public void prePersist(){
        setRegisteredDate(LocalDate.now());
    }
}
