package com.eek.allerta.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class OpenAIResponse {
    private String id;
    private String object;
    private String created;
    private String model;
    private List<Choice> choices;

    @Data
    public static class Choice {
        private Integer index;
        private Message message;
        private Double logprobe;
        private String finishReason;

        private Usage usage;

        private String systemFingerprint;
    }

    @Data
    public static class Message {
        private String role;
        private String content;
    }

    @Data
    public static class Usage {
        private Integer promptTokens;
        private Integer completionTokens;
        private Integer totalTokens;
    }
}
