# Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
# Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

# Note: Python solution requires 'func' to be supplied in 'lambda' syntax. Example provided.
def dropElements(arr, func):
    Pass = []
    Fail = []
    for x in arr:
        if func(x) == False and x not in Fail:
            Fail.append(x)
        else:
            Pass.append(x)
    return Pass


dropElements([1, 2, 3, 7, 4], lambda n: n > 3)
# Returns [7, 4]
