# Perform a search and replace on the sentence using the arguments provided and return the new sentence.
# First argument is the sentence to perform the search and replace on.
# Second argument is the word that you will be replacing (before).
# Third argument is what you will be replacing the second argument with (after).
# Note: Preserve the case of the first character in the original word when you are replacing it.
# For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


def myReplace(string: str, before: str, after: str):
    strArr = string.split(" ")
    if before[0] == before[0].upper():
        after = after.replace(after[0], after[0].upper())
        strArr[strArr.index(before)] = after
    else:
        after = after.replace(after[0], after[0].lower())
        strArr[strArr.index(before)] = after
    return " ".join(strArr)
