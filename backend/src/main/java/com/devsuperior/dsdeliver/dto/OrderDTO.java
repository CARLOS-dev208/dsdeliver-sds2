package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dsdeliver.entities.OrdemStatus;
import com.devsuperior.dsdeliver.entities.Order;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class OrderDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	
	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrdemStatus status;
	private List<ProductDTO> products = new ArrayList<>();
	
	public OrderDTO(Long id, String address, Double latitude, Double longitude, Instant moment, OrdemStatus status) {
		super();
		this.id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.moment = moment;
		this.status = status;
	}
	
	public OrderDTO(Order entity) {
		super();
		this.id = entity.getId();
		this.address = entity.getAddress();
		this.latitude = entity.getLatitude();
		this.longitude = entity.getLongitude();
		this.moment = entity.getMoment();
		this.status = entity.getStatus();
		this.products = entity.getProducts().stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
	
	
}
