# Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
# This means that given an element x, the 'truth test' is passed if func(x) is true.
# If no element passes the test, return undefined.

# Note: Python solution requires 'func' variable to be in lambda syntax. Example provided.


def findElement(arr, func):
    for x in arr:
        if func(x) == True:
            return x
        else:
            pass


findElement([1, 2, 3, 4], lambda num: num % 2 == 0)
