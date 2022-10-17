# Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
# For the purpose of this exercise, you should also capitalize connecting words like the and of.


def titleCase(string: str):
    strings = string.split(" ")
    strings = [string.replace(string[0], string[0].upper()) for string in strings]
    strings = [string.replace(string[1:], string[1:].lower()) for string in strings]
    return " ".join(strings)
