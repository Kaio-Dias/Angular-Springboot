package com.usermanagement.user_system.configs;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Profile;

import com.usermanagement.user_system.annotations.Development;

@Configuration
//@Profile("development")
@Development
public class BeansConfig {
    
    @Bean(name = "applicationName")
    public String applicationName(){
        return "Trade Exchange";
    }

    @Bean
    public CommandLineRunner run(){
        return args -> {
            System.out.println("We are just testing this shit");
        };
    }
}
