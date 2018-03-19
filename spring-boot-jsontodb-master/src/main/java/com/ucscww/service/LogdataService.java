package com.ucscww.service;

import com.ucscww.domain.Logdata;
import com.ucscww.repository.LogdataRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogdataService {

    private LogdataRepository logdataRepository;

    public LogdataService(LogdataRepository logdataRepository) {
        this.logdataRepository = logdataRepository;
    }

    public Iterable<Logdata> list() {
        return logdataRepository.findAll();
    }

    public Logdata save(Logdata logdata) {
        return logdataRepository.save(logdata);
    }

    public void save(List<Logdata> logdatas) {
        logdataRepository.save(logdatas);
    }
}
