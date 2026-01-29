class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def Car(self):
        print(self.brand)

v = Vehicle("Toyota")
v.Car()
