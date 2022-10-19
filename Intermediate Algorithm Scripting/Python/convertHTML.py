# Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


def convertHTML(string: str):
    convDict = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"}
    for x in string:
        if x in convDict.keys():
            string = string.replace(x, convDict[x])
    return string
