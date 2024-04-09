package com.eek.allerta.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class OpenAIRequest {
    private String model = "gpt-4-vision-preview";
    private List<Message> messages;
    private int maxTokens = 900;

    @Data
    @NoArgsConstructor
    @Accessors(chain = true)
    public static class Message {
        private String role = "user";
        private List<Content> content;

        @Data
        @NoArgsConstructor
        @Accessors(chain = true)
        public static class Content {
            private String type;
            private String text;
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
