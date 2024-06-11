package com.usermanagement.user_system.configs;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Profile;

import com.usermanagement.user_system.annotations.Development;
import com.usermanagement.user_system.annotations.Lexus;
import com.usermanagement.user_system.interfaces.Carro;

@Configuration
//@Profile("development")
@Development
public class BeansConfig {
    
    @Bean(name = "applicationName")
    public String applicationName(){
        return "Trade Exchange";
    }

    @Lexus
    private Carro carro;

    @Bean(name = "executarCarro")
    public CommandLineRunner executarCarro{
        return args -> {
            this.animal.roncarMotor();
        };
    }

    @Bean
    public CommandLineRunner run(){
        return args -> {
            System.out.println("We are just testing this shit");
        };
    }
}
