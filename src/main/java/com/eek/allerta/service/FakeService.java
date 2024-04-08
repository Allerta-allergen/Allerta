package com.eek.allerta.service;

import com.eek.allerta.dto.FactoryDTO;
import com.eek.allerta.dto.FoodDTO;
import com.eek.allerta.dto.IngredientDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FakeService {
    public FoodDTO getFoodDTO() {
        IngredientDTO i1 = new IngredientDTO().setName("Rice flour").setUserAllergen(false).setPotentialAllergen(false).setDescription(null);
        IngredientDTO i2 = new IngredientDTO().setName("Corn flour").setUserAllergen(false).setPotentialAllergen(true).setDescription("Contains corn");
        IngredientDTO i3 = new IngredientDTO().setName("Mono and diglycerides").setUserAllergen(false).setPotentialAllergen(true).setDescription("May contain trace amount of soy or milk");
        IngredientDTO i4 = new IngredientDTO().setName("Peanuts").setUserAllergen(false).setPotentialAllergen(true).setDescription(null);
        FactoryDTO f1 = new FactoryDTO().setFreeFrom(null).setProcesses(List.of(i4));
        return new FoodDTO().setFood(null).setIngredientsLabel(true).setContains(List.of(i1, i2, i3)).setFactory(f1);
    }
}
