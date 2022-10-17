# Return the length of the longest word in the provided sentence.
# Your response should be a number.


def findLongestWord(string: str):
    return max([len(word) for word in string.split(" ")])


# Extra Credit: Returns the longest word.
def findLongestWord(string: str):
    return [
        word
        for word in string.split(" ")
        if len(word) == max([len(word) for word in string.split(" ")])
    ]
