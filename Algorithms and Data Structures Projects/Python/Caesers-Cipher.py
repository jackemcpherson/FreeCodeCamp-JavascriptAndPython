# One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
# In a shift cipher the meanings of the letters are shifted by some set amount.
# A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
# Thus A ↔ N, B ↔ O and so on.
# Write a function which takes a ROT13 encoded string as input and returns a decoded string.
# All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


def rot13(string: str):
    string = string.upper()
    aToZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    cleanString = ""
    for x in string:
        if x in aToZ:
            if (aToZ.index(x) - 13) < 26:
                cleanString = cleanString + aToZ[(aToZ.index(x) - 13)]
            elif (aToZ.index(x) - 13) >= 26:
                cleanString = cleanString + aToZ[(aToZ.index(x) - 13) + 26]
        else:
            cleanString = cleanString + x
    return cleanString
