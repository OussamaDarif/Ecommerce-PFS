package com.ensa.ecommerce_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "product")
    private List<ProductItemEntity> productItems=new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    private BrandEntity brand;

    @ManyToOne(fetch = FetchType.LAZY)
    private CategoryEntity category;
}
