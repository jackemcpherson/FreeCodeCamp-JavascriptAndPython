# Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
# The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
# The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
# For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


def sumFibs(num: int):
    a = 0
    b = 1
    fib = 0
    for x in range(0, num):
        if fib >= num:
            break
        elif b % 2 != 0:
            fib = fib + b
            b = b + a
            a = b - a
        else:
            b = b + a
            a = b - a
    return fib
