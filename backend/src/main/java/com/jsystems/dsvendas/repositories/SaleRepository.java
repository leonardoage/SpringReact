package com.jsystems.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jsystems.dsvendas.dto.SaleSumDTO;
import com.jsystems.dsvendas.dto.SalesSucessDTO;
import com.jsystems.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query(   "SELECT new com.jsystems.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ " FROM Sale as obj "
			+ "GROUP BY obj.seller " )  
	List<SaleSumDTO> amountGroupedBySeller();

	
	@Query(   "SELECT new com.jsystems.dsvendas.dto.SalesSucessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals) )"
			+ " FROM Sale as obj "
			+ "GROUP BY obj.seller " )  
	List<SalesSucessDTO> sucessGroupedBySeller();
	
}
