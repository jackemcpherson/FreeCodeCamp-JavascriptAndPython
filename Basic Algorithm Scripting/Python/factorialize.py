# Return the factorial of the provided integer.
# If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
# Factorials are often represented with the shorthand notation n!
# For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
# Only integers greater than or equal to zero will be supplied to the function.

from math import factorial


def factorialize(num: int):
    if num == 1 or num == 0:
        return 1
    else:
        return num * factorial(num - 1)
