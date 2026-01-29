class Person:
    def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName
    
    def information(self):
        print(self.firstName,self.lastName)

i = Person("John", "Doe")
i.information()