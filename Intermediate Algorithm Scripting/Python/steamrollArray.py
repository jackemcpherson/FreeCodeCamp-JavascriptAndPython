# Flatten a nested array.
# You must account for varying levels of nesting.

def steamrollArray(arr):
    newArr = []
    for x in arr:
        if type(x) == list:
            newArr.extend(steamrollArray(x))
        else:
            newArr.append(x)
    return newArr