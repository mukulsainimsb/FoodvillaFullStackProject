package com.springboot.foodyzone.project_foodyzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.foodyzone.project_foodyzone.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food,Long>{

	
}
