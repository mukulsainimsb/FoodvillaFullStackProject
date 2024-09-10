package com.springboot.foodyzone.project_foodyzone.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springboot.foodyzone.project_foodyzone.Food;
import com.springboot.foodyzone.project_foodyzone.repository.FoodRepository;
import com.springboot.foodyzone.project_foodyzone.service.FoodService;

@RestController
public class FoodController {
	
	@Autowired
	private FoodRepository foodRepository;
	
	@Autowired
	private FoodService foodService;
	
	@PostMapping("/food-list")
	public ResponseEntity<Food> createList(@ModelAttribute Food food,@RequestParam("file") MultipartFile image ){
		
		String  filename=null;
		
	String path = "C:\\Users\\Mukul saini\\Downloads\\project-foodyzone\\project-foodyzone\\src\\main\\resources\\static\\images";
		try {
			filename=foodService.uploadImage(path, image);
		} catch (IOException e) {
			e.printStackTrace();
		}
		food.setImage(filename);
		  foodRepository.save(food);
		return ResponseEntity.created(null).build();
	}
	
	@DeleteMapping("food-list/{id}")
	public ResponseEntity<Food> deleteFood(@PathVariable Long id){
		foodRepository.deleteById(id);
		return ResponseEntity.ok(null);
	}
	
	@GetMapping("/food-list")
	public List<Food> getFoodList() {
		List<Food> lists= foodRepository.findAll();
		return lists;
	}
	
	@GetMapping("/hello")
	public String getHello() {
		return "hello bro";
	}
		}
