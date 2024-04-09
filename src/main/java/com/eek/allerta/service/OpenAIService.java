package com.eek.allerta.service;

import com.eek.allerta.dto.OpenAIRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class OpenAIService {
    @Value("${openai_key}")
    private String OPENAI_KEY;

    private final String URI = "https://api.openai.com/v1/chat/completions";
    private final RestClient restClient = RestClient.create();

    private String photoToBase64(MultipartFile photo) throws IOException {
        byte[] bytes = photo.getBytes();
        return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(bytes);
    }

    public String visionRequest(MultipartFile file) throws IOException {
        OpenAIRequest body = new OpenAIRequest();
        OpenAIRequest.Message message = new OpenAIRequest.Message();
        OpenAIRequest.Message.Content contentText = new OpenAIRequest.Message.Content();
        contentText.setType("text");
        contentText.setText("Respond in json only; render English for strings such as ingredients and descriptions; if the information is not in English, prioritise reading Estonian; if corresponding information is not indicated, return null or an empty array. What is this food? If the name of the food is not indicated, or if this is not food, return null for \\\"food\\\". Does this image contain a list of ingredients? If you see a list of ingredients, do not add ingredients the label doesn't specify. What are the ingredients and the potential allergens among them? Does the label specify if the factory also processes or is free from other ingredients? The user is allergic to nuts. What are the ingredients we have gathered so far that are allergens specific to the user? The user understands that your adivce may be inaccurate and should not be the sole source consulted for life-threatening allergies. Follow this structure: \\n{\\\"food\\\":\\\"Rice cake\\\",\\\"is_ingredients_label\\\":true,\\\"contains\\\":[{\\\"name\\\":\\\"Rice flour\\\",\\\"user_allergen\\\":false,\\\"potential_allergen\\\":false,\\\"description\\\":null},{\\\"name\\\":\\\"Corn flour\\\",\\\"user_allergen\\\":false,\\\"potential_allergen\\\":true,\\\"description\\\":\\\"Contains corn\\\"},{\\\"name\\\":\\\"Mono and diglycerides\\\",\\\"user_allergen\\\":false,\\\"potential_allergen\\\":true,\\\"description\\\":\\\"May contain trace amount of soy or milk\\\"}],\\\"factory\\\":{\\\"free_from\\\":[\\\"gluten\\\"],\\\"processes\\\":[{\\\"name\\\":\\\"Peanuts\\\",\\\"user_allergen\\\":false,\\\"potential_allergen\\\":true\\\"description\\\":null},{\\\"name\\\":\\\"Milk\\\",\\\"user_allergen\\\":false,\\\"potential_allergen\\\":true\\\"description\\\":null}]}}");
        OpenAIRequest.Message.Content contentImage = new OpenAIRequest.Message.Content();
        contentImage.setType("image_url");
        contentImage.setImageUrl(new OpenAIRequest.Message.Content.ImageUrl().setUrl(photoToBase64(file)));

        List<OpenAIRequest.Message.Content> contentList = new ArrayList<>();
        contentList.add(contentText);
        contentList.add(contentImage);
        message.setContent(contentList);

        List<OpenAIRequest.Message> messageList = new ArrayList<>();
        messageList.add(message);
        body.setMessages(messageList);

        return restClient.post()
                .uri(URI)
                .header("Authorization", "Bearer " + OPENAI_KEY)
                .contentType(MediaType.APPLICATION_JSON)
                .body(body)
                .retrieve()
                .body(String.class);
    }

    public String textRequest() {
//        String result = restClient.post()
//                .uri(URI).toString();
        return null;
    }
}
