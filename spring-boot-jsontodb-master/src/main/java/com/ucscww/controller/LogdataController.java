package com.ucscww.controller;

import com.ucscww.domain.Logdata;
import com.ucscww.service.LogdataService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

//@RestController
@Controller
@RequestMapping
public class LogdataController {

    private LogdataService logdataService;

    public LogdataController(LogdataService logdataService) {
        this.logdataService = logdataService;
    }

    @GetMapping("/log")
    @ResponseBody
    public Iterable<Logdata> list() {
        return logdataService.list();
    }

    @GetMapping("/chart")
    public String list(HashMap<String, Object> map) {
        map.put("keykey", logdataService.list());
        return "logpage";
    }
}
