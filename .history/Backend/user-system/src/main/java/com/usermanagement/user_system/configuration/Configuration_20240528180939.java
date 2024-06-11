package com.usermanagement.user_system.configuration;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@EnableConfigurationProperties
public class Configuration {
    
    @Bean(name = "applicationName")
    public String applicationName(){
        return "Trade Exchange";
    }
}
