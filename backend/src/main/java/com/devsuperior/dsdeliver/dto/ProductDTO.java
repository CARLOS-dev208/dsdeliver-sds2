package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperior.dsdeliver.entities.Product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ProductDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	
	
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageUri;
	
	
	public ProductDTO(Long id, String name, Double price, String description, String imageUri) {
	
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}
	
	public ProductDTO(Product entity) {
	
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.description = entity.getDescription();
		this.imageUri = entity.getImageUri();
	}
	
	
}
