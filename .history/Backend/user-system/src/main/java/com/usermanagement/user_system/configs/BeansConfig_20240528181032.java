package com.usermanagement.user_system.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Configuration {
    
    @Bean(name = "applicationName")
    public String applicationName(){
        return "Trade Exchange";
    }
}
