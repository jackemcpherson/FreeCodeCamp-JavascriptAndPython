# Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
# In other words, return the symmetric difference of the two arrays.
# Note: You can return the array with its elements in any order.


def diffArray(arr1, arr2):
    return list(set(arr1) ^ set(arr2))
