package com.springboot.foodyzone.project_foodyzone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.foodyzone.project_foodyzone.Account;
import com.springboot.foodyzone.project_foodyzone.Exception.AccountNotFoundException;
import com.springboot.foodyzone.project_foodyzone.repository.AccountRepository;

@RestController
public class AccountController {
	
//	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountRepository accountRepository;
	
	@GetMapping("verify")
	public String verify() {
		return "Successful";
	}
	
	@GetMapping("food/accounts")
	public List<Account> getAccount(){
		List<Account> lists= accountRepository.findAll();
		return lists;
	}
	
	@PostMapping("food/accounts")
	public ResponseEntity<String> createAccount(@RequestBody Account account){
		account.setRole("USER");
//		account.setPassword(passwordEncoder.encode(account.getPassword())); 
		accountRepository.save(account);
		return ResponseEntity.ok("User Registered Successfully");
	}
	@DeleteMapping("food/accounts/{id}")
	public ResponseEntity<String> deleteAccount(@PathVariable Integer id){
		Account account=accountRepository.findById(id).orElse(null);
		if(account.equals(null)) {
			throw new AccountNotFoundException("id="+id);
		}
		else {
	   accountRepository.deleteById(id);
	   return ResponseEntity.ok("Account Deleted Successfully");
	}
}
	
	@GetMapping("food/account/{id}")
	public Optional<Account> getAccount(@PathVariable Integer id) {
		
		Optional<Account> account = accountRepository.findById(id);
		
		return account;
	}
}
