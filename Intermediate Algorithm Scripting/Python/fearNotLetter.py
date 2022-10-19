# Find the missing letter in the passed letter range and return it.
# If all letters are present in the range, return undefined.


def fearNotLetter(string: str):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphaStr = alphabet[alphabet.index(string[0]) : alphabet.index(string[-1])]
    for x in alphaStr:
        if x not in string:
            return x
        else:
            pass
