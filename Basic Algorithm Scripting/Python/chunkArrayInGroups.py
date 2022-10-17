# Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


def chunkArrayInGroups(arr, size: int):
    return [arr[x : x + size] for x in range(0, len(arr), size)]
