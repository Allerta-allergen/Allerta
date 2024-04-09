package com.eek.allerta.service;

import com.eek.allerta.dto.OpenAIResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AllertaService {
    private final OpenAIService openAIService;

    public OpenAIResponse getFoodDTO(MultipartFile file) throws IOException {
        if(file != null && file.getSize() > 0 && file.getContentType() != null && file.getContentType().contains("image")) {
            return openAIService.visionRequest(file);
        }
        return null;
    }
}
