# Pig Latin is a way of altering English Words.
# The rules are as follows:
# - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
# - If a word begins with a vowel, just add way at the end.
# Translate the provided string to Pig Latin.
# Input strings are guaranteed to be English words in all lowercase.


def translatePigLatin(string):
    vowels = ["a", "e", "i", "o", "u"]
    if string[0] in vowels:
        return string + "way"
    elif len([x for x in string if x in vowels]) == 0:
        return string + "ay"
    else:
        firstVowel = string.index([x for x in string if x in vowels][0])
        return string[firstVowel:] + string[:firstVowel] + "ay"
