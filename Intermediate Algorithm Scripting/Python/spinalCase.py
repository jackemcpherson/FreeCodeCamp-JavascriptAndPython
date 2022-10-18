# Convert a string to spinal case.
# Spinal case is all-lowercase-words-joined-by-dashes.

import re


def spinalCase(string: str):
    return "-".join(re.split("\s|_|(?=[A-Z])", string)).lower()
