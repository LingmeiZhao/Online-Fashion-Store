package com.company.store.mappers;

import com.company.store.models.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.*;

@Mapper
public interface CustomerMapper {
    @Results({
            @Result(property = "customerId", column = "Customer_Id"),
            @Result(property = "firstName", column = "First_Name"),
            @Result(property = "lastName", column = "Last_Name"),
            @Result(property = "email", column = "Email"),
            @Result(property = "password", column = "Customer_Password"),
            @Result(property = "paymentMethod", column = "Payment_Method"),
            @Result(property = "paymentAccount", column = "Payment_Account"),
    })
    @Select("SELECT * FROM Customer WHERE Customer_ID = #{ID}")
    Customer findById(Long customerId);


    @Select("SELECT EXISTS( SELECT * FROM Customer WHERE Email = #{email} and Customer_Password = #{password})")
    boolean findByEmailPassword(@Param("email")String email,
                                @Param("email") String password);

    @Results({
            @Result(property = "customerId", column = "Customer_Id"),
            @Result(property = "firstName", column = "First_Name"),
            @Result(property = "lastName", column = "Last_Name"),
            @Result(property = "email", column = "Email"),
            @Result(property = "password", column = "Customer_Password"),
            @Result(property = "paymentMethod", column = "Payment_Method"),
            @Result(property = "paymentAccount", column = "Payment_Account"),
    })
    @Select("SELECT * FROM Customer WHERE Email = #{email}")
    Customer findByEmail(@Param("email") String email);

    @Results({
            @Result(property = "customerId", column = "Customer_Id"),
            @Result(property = "firstName", column = "First_Name"),
            @Result(property = "lastName", column = "Last_Name"),
            @Result(property = "email", column = "Email"),
            @Result(property = "password", column = "Customer_Password"),
            @Result(property = "paymentMethod", column = "Payment_Method"),
            @Result(property = "paymentAccount", column = "Payment_Account"),
    })
    @Select("SELECT * FROM Customer WHERE Customer_Id = #{customerId}")
    Customer findByCustomerId(@Param("customerId") Long customerId);

}
