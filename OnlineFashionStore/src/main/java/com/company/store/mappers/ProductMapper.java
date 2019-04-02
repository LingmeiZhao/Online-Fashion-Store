package com.company.store.mappers;

import com.company.store.models.Product;
import org.apache.ibatis.annotations.*;

import java.util.ArrayList;

@Mapper
public interface ProductMapper {
    @Results({
            @Result(property = "productId", column = "Product_ID"),
            @Result(property = "name", column = "Product_Name"),
            @Result(property = "price", column = "Price"),
            @Result(property = "classification", column = "Classification"),
            @Result(property = "size", column = "Size"),
            @Result(property = "stockQuantity", column = "Stock_Quantity"),
            @Result(property = "sellQuantity", column = "Sell_Quantity"),
            @Result(property = "review", column = "Review"),
            @Result(property = "addDate", column = "Add_Time")
    })
    @Select(value = "SELECT * FROM Product ORDER BY Sell_Quantity DESC LIMIT #{begin}, #{number}")
    ArrayList<Product> sortByPrice(@Param("begin") int begin,
                                   @Param("number") int number);

    @Results({
            @Result(property = "productId", column = "Product_ID"),
            @Result(property = "name", column = "Product_Name"),
            @Result(property = "price", column = "Price"),
            @Result(property = "classification", column = "Classification"),
            @Result(property = "size", column = "Size"),
            @Result(property = "stockQuantity", column = "Stock_Quantity"),
            @Result(property = "sellQuantity", column = "Sell_Quantity"),
            @Result(property = "review", column = "Review"),
            @Result(property = "addDate", column = "Add_Time")
    })
    @Select(value = "SELECT * FROM Product WHERE Product_ID = #{productId}")
    Product findByProductId(Long productId);

}
