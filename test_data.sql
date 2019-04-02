USE mydb;
SHOW TABLES;
DESC Customer;
DESC Item;
DESC Supplier;
DROP TABLE Customer_Order;
DROP TABLE Item;
DROP TABLE Supplier;
DROP TABLE Customer;
SELECT * FROM Customer;
INSERT INTO Customer VALUES(1,"A","Zhao","zhao@gmail.com","123","cystal city","alipay","123","cystal city");
INSERT INTO Customer VALUES(2,"B","Qian","qian@gmail.com","123","cystal city","alipay","123","cystal city");
INSERT INTO Customer VALUES(3,"C","Sun","sun@gmail.com","123","cystal city","alipay","123","cystal city");
INSERT INTO Customer VALUES(4,"D","Li","li@gmail.com","123","cystal city","alipay","123","cystal city");

INSERT INTO Supplier VALUES(123,"E", "Zhou", "zhou@gmail.com", "123456", "Women's Clothes");
INSERT INTO Item VALUES(1, "red coat", 120, "coat", "S", 20, 100, '2017-02-01', 4.5, "http:hahah.com", 123);
INSERT INTO Item VALUES(2, "white coat", 150, "coat", "M", 5, 200, '2018-02-01', 4.7, "http:yeye.com", 123);
INSERT INTO Item VALUES(3, "blue shirt", 200, "shirt", "S", 10, 70, '2017-02-01', 4.5, "http:hehe.com", 123);
INSERT INTO Item VALUES(4, "black shirt", 170, "shirt", "M", 30, 220, '2018-02-01', 4.7, "http:yaya.com", 123);

SELECT * FROM Item;