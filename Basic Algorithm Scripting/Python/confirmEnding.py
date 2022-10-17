#Check if a string (first argument, str) ends with the given target string (second argument, target).
#This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
#But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

def confirmEnding(string: str, target: str):
  if string[-len(target):] == target:
    return True
  else:
    return False