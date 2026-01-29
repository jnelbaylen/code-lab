class Character:
    FULL_NAME = "name"
    HP = 100
    MP = 50
    ATK = 15
    LVL = 1

personOne = Character()       # Creating Objects
personTwo = Character() 

personOne.FULL_NAME= "John Doe"

print(personOne.FULL_NAME)           # Accessing Attributes

class product:
    ID = 202400100
    productName = "productName"
    Qty = 5

productOne = product()

productOne.ID = 202400101
productOne.productName = "Cream O"


print(productOne.productName)