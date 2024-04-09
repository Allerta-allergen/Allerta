package com.eek.allerta.service;

import com.eek.allerta.dto.FoodDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
@RequiredArgsConstructor
public class AllertaService {

    private String photoToBase64(MultipartFile photo) throws IOException {
            byte[] bytes = photo.getBytes();
            return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(bytes);
    }

    public FoodDTO getFoodDTO(MultipartFile photo) throws IOException {
        if(photo != null && photo.getSize() > 0 && photo.getContentType() != null && photo.getContentType().contains("image")) {
            String base64Photo = photoToBase64(photo);


            return new FoodDTO();
        }
        return null;
    }
}
