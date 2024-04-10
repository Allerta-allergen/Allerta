package com.eek.allerta.web;

import com.eek.allerta.dto.FoodDTO;
import com.eek.allerta.service.AllertaService;
import com.eek.allerta.service.FakeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class AllertaController {
    private final FakeService fakeService;
    private final AllertaService allertaService;

    @PostMapping("photo")
    public FoodDTO photo(@RequestParam("image") MultipartFile photo) throws IOException {
        // AllertaService handles validation
        return allertaService.getFoodDTO(photo);
    }

    @PostMapping("text")
    public FoodDTO text(@RequestParam("ingredients") String text) {
        return allertaService.getFoodDTO(text);
    }

    @PostMapping("photo_fake")
    public FoodDTO photoFake(@RequestParam("image") MultipartFile photo) {
        if (!photo.isEmpty()) {
            return fakeService.getFoodDTO();
        }
        return null;
    }

    @PostMapping("text_fake")
    public FoodDTO textFake(@RequestParam("ingredients") String text) {
        if (!text.isEmpty()) {
            return fakeService.getFoodDTO();
        }
        return null;
    }

    @GetMapping("hello")
    public String hello() {
        return "hello";
    }
}
