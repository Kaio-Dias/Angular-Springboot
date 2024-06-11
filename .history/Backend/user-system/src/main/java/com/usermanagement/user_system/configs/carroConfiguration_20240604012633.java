package com.usermanagement.user_system.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.usermanagement.user_system.interfaces.Carro;

@Configuration
public class carroConfiguration {
    
    @Bean(name = "mustang")
    public Carro mustang(){
        return new Carro(){
            @Override
            public void roncarMotor(){
                System.out.println("V8 goes brrrrrr");
            }
        };
    }

    @Bean(name = "lexuslfa")
    public Carro lexuslfa(){
        return new Carro(){
            @Override
            public void roncarMotor(){
                System.out.println("V10 goes vrrrrrrr");
            }
        };
    }
}
