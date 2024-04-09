package com.eek.allerta.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors
public class OpenAIResponse {
    private String id;
    private String object;
    private String created;
    private String model;
    private List<Choice> choices;

    @Data
    @Accessors
    public static class Choice {
        private Integer index;
        private Message message;
        private Double logprobe;
        @JsonProperty("finish_reason")
        private String finishReason;
        private Usage usage;
        @JsonProperty("system_fingerprint")
        private String systemFingerprint;
    }

    @Data
    @Accessors
    public static class Message {
        private String role;
        private String content;
    }

    @Data
    @Accessors
    public static class Usage {
        @JsonProperty("prompt_tokens")
        private Integer promptTokens;
        @JsonProperty("completion_tokens")
        private Integer completionTokens;
        @JsonProperty("total_tokens")
        private Integer totalTokens;
    }
}
