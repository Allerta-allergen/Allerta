package com.eek.allerta.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class FoodDTO {
    @JsonProperty("food")
    private String food;

    @JsonProperty("is_ingredients_label")
    private boolean isIngredientsLabel;

    @JsonProperty("contains")
    private List<IngredientDTO> contains;

    @JsonProperty("factory")
    private FactoryDTO factory;

}
