package com.ucscww;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ucscww.domain.Logdata;
import com.ucscww.service.LogdataService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.File;

@SpringBootApplication
public class JsontodbApplication {

	public static void main(String[] args) {
		SpringApplication.run(JsontodbApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(LogdataService logdataService){
	    return args -> {
			ObjectMapper objectMapper = new ObjectMapper();
			Logdata us = objectMapper.readValue(new File("src/main/resources/static/json/logData.json"), Logdata.class);
			logdataService.save(us);
	    };
	}
}
