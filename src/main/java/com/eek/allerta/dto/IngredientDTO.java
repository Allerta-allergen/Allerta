package com.eek.allerta.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class IngredientDTO {
    @JsonProperty("name")
    private String name;

    @JsonProperty("user_allergen")
    private boolean userAllergen;

    @JsonProperty("potential_allergen")
    private boolean potentialAllergen;

    @JsonProperty("description")
    private String description;
}
