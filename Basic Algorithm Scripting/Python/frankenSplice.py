# You are given two arrays and an index.
# Copy each element of the first array into the second array, in order.
# Begin inserting elements at index n of the second array.
# Return the resulting array. The input arrays should remain the same after the function runs.


def frankenSplice(arr1, arr2, n):
    return arr1[:n] + arr2 + arr1[n:]
