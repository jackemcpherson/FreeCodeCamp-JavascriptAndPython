# Convert the given number into a roman numeral.
#
# Roman numerals	Arabic numerals
# M	            1000
# CM	            900
# D	            500
# CD	            400
# C	            100
# XC	            90
# L	            50
# XL	            40
# X	            10
# IX	            9
# V	            5
# IV	            4
# I	            1
#
# All roman numerals answers should be provided in upper-case.


def convertToRoman(num: int):
    m = ["", "M", "MM", "MMM"]
    c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

    return m[num // 1000] + c[(num % 1000) // 100] + x[(num % 100) // 10] + i[num % 10]
