# Fill in the object constructor with the following methods below:
# getFirstName()
# getLastName()
# getFullName()
# setFirstName(first)
# setLastName(last)
# setFullName(firstAndLast)
# Run the tests to see the expected output for each method.
# The methods that take an argument must accept only one argument and it has to be a string.
# These methods must be the only available means of interacting with the object.


class Person:
    def __init__(self, firstAndLast):
        self.fullName = firstAndLast

    def getFirstName(self):
        return self.fullName.split(" ")[0]

    def getLastName(self):
        return self.fullName.split(" ")[1]

    def getFullName(self):
        return self.fullName

    def setFirstName(self, first):
        self.fullName = first + " " + self.fullName.split(" ")[1]

    def setLastName(self, last):
        self.fullName = self.fullName.split(" ")[0] + " " + last

    def setFullName(self, name):
        self.fullName = name
