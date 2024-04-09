package com.eek.allerta.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class OpenAIRequest {
    private String model = "gpt-4-vision-preview";
    private List<Message> messages;
    @JsonProperty("max_tokens")
    private int maxTokens = 900;

    @Data
    @NoArgsConstructor
    @Accessors(chain = true)
    public static class Message {
        private String role = "user";
        private List<Content> content;

        @Data
        @Accessors(chain = true)
        @JsonInclude(JsonInclude.Include.NON_NULL)
        public static class Content {
            private String type;
            private String text;
            @JsonProperty("image_url")
            private ImageUrl imageUrl;

            @Data
            @NoArgsConstructor
            @Accessors(chain = true)
            public static class ImageUrl {
                private String url;
            }
        }
    }
}
