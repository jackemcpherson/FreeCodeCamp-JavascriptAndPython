#Repeat a given string str (first argument) for num times (second argument).
#Return an empty string if num is not a positive number.
#For the purpose of this challenge, do not use the built-in .repeat() method.

def repeatStringNumTimes(string: str, num: int):
  if num > 0:
    return string * num
  else:
    return ""