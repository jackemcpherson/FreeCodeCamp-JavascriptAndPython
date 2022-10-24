# Return an English translated sentence of the passed binary string.
# The binary string will be space separated.


def binaryAgent(string: str):
    return "".join([chr(int(x, 2)) for x in string.split(" ")])
