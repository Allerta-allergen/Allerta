package com.eek.allerta.web;

import com.eek.allerta.dto.FoodDTO;
import com.eek.allerta.service.AllertaService;
import com.eek.allerta.service.FakeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class AllertaController {
    private final FakeService fakeService;
    private final AllertaService allertaService;

    @PostMapping("photo")
    public String photo(@RequestParam("file") MultipartFile photo) throws IOException {
        if(!photo.isEmpty()) {
            byte[] bytes = photo.getBytes();
            return Base64.getEncoder().encodeToString(bytes);
        }
        return null;
    }

    @PostMapping("photo_fake")
    public FoodDTO photoFake(@RequestParam("file") MultipartFile photo) {
        if (!photo.isEmpty()) {
            return fakeService.getFoodDTO();
        }
        return null;
    }

    @GetMapping("hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("test")
    public String test() {
        return allertaService.getTEST();
    }
}
