package com.eek.allerta.web;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("api")
public class AllertaController {
    @PostMapping("photo")
    public String photo(@RequestParam("file") MultipartFile photo) throws IOException {
        if(!photo.isEmpty()) {
            byte[] bytes = photo.getBytes();
            return Base64.getEncoder().encodeToString(bytes);
        }
        return null;
    }

    @GetMapping("hello")
    public String hello() {
        return "hello";
    }
}
