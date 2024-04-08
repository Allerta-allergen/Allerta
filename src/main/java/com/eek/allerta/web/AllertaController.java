package com.eek.allerta.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class AllertaController {
    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }
}
