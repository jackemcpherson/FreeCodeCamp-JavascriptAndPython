# Remove all falsy values from an array. Return a new array; do not mutate the original array.
# Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
# Hint: Try converting each value to a Boolean.


def bouncer(arr):
    falsy = [False, 0, ""]
    return [x for x in arr if x not in falsy]
