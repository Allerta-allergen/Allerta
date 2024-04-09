package com.eek.allerta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AllertaService {
    @Value("${openai_key}")
    private String OPENAI_KEY;
    @Value("${test}")
    private String TEST;

    public String getTEST() {
        return TEST;
    }
}
