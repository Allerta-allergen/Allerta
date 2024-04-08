package com.eek.allerta.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class FactoryDTO {
    @JsonProperty("free_from")
    private List<String> freeFrom;

    @JsonProperty("processes")
    private List<IngredientDTO> processes;
}
