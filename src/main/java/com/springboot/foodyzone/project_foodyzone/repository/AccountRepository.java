package com.springboot.foodyzone.project_foodyzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.foodyzone.project_foodyzone.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer>{

	 public Account findByEmail(String username);

}
