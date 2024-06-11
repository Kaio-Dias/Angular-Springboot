package com.usermanagement.user_system.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfig {
    
    @Bean(name = "applicationName")
    public String applicationName(){
        return "Trade Exchange";
    }
}
