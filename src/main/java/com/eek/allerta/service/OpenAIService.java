package com.eek.allerta.service;

import com.eek.allerta.dto.OpenAIRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class OpenAIService {
    @Value("${openai_key}")
    private String OPENAI_KEY;

    private final String URI = "https://api.openai.com/v1/chat/completions";
    private final RestClient restClient = RestClient.create();

    public String visionRequest() {
//        OpenAIRequest openAIRequest = new OpenAIRequest();
//        OpenAIRequest.Message message = new OpenAIRequest.Message();
//        OpenAIRequest.Message.Content contentText = new OpenAIRequest.Message.Content();
//        contentText.setType("text");
//        contentText.setText("prompt");
//        OpenAIRequest.Message.Content contentImage = new OpenAIRequest.Message.Content();
//        OpenAIRequest.Message.Content.ImageUrl imageUrl = new OpenAIRequest.Message.Content.ImageUrl();
//        contentImage.setType("image_url");
//        imageUrl.setUrl("data:");


//        String result = restClient.post()
//                .uri(URI)
//                .contentType(MediaType.APPLICATION_JSON)
//                .toString();
        return null;
    }

    public String textRequest() {
//        String result = restClient.post()
//                .uri(URI).toString();
        return null;
    }
}
