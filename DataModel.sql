CREATE TABLE Customer (
    Customer_Id INT NOT NULL,
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Email VARCHAR(255) NOT NULL,
    Customer_Password VARCHAR(255) NOT NULL,
    Payment_Method VARCHAR(255),
    Payment_Account INT,
    PRIMARY KEY (Customer_Id)
); 

CREATE TABLE Address (
	Address_Id INT NOT NULL,
    Customer_Id INT NOT NULL,
    Line1 VARCHAR(255) NOT NULL,
    Line2 VARCHAR(255),
    City VARCHAR(255) NOT NULL,
    State VARCHAR(10) NOT NULL,
    Country VARCHAR(10) NOT NULL,
    PRIMARY KEY (Address_Id, Customer_Id),
    FOREIGN KEY (Customer_Id) REFERENCES Customer(Customer_Id)  ON DELETE CASCADE
);

CREATE TABLE Supplier (
    SSN INT NOT NULL,
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Email VARCHAR(255) NOT NULL,
    Supplier_Password VARCHAR(255) NOT NULL,
    Department VARCHAR(255) NOT NULL,
    PRIMARY KEY (SSN)
);

CREATE TABLE Item (
    Item_Id INT NOT NULL,
    Item_Name VARCHAR(255) NOT NULL,
    Price DOUBLE NOT NULL,
    Classification VARCHAR(255),
    Size VARCHAR(10),
    Color VARCHAR(10),
    Stock_Quantity INT NOT NULL,
    Sell_Quantity INT,
    Add_Time DATE,
    Review FLOAT,
    Link VARCHAR(255),
    SSN INT,
    PRIMARY KEY (Item_Id),
    FOREIGN KEY (SSN) REFERENCES Supplier(SSN)  ON DELETE CASCADE
);

CREATE TABLE Customer_Order (
    Order_Id INT NOT NULL,
    Customer_Id INT NOT NULL,
    Item_Id INT NOT NULL,
    Order_Timestamp DATETIME NOT NULL,
    Price DOUBLE NOT NULL,
    Order_Status VARCHAR(10) NOT NULL,
    PRIMARY KEY (Order_Id),
    FOREIGN KEY (Customer_Id) REFERENCES Customer(Customer_Id) ON DELETE CASCADE,
    FOREIGN KEY (Item_Id) REFERENCES Item(Item_Id)  ON DELETE CASCADE
);
