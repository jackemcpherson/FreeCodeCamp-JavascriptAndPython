# According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:
#
# T=2πa3μ−−−√
#
# a  is the orbit's semi-major axis
# μ=GM  is the standard gravitational parameter
# G  is the gravitational constant,
# M  is the mass of the more massive body.
#
# Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
# The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
# The values should be rounded to the nearest whole number. The body being orbited is Earth.
# The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

from math import pi, sqrt

# https://en.wikipedia.org/wiki/Orbital_period
def calc(obj):
    GM = 398600.4418
    earthRadius = 6367.4447
    earth = earthRadius + obj["avgAlt"]
    orbitalPeriod = round(2 * pi * sqrt((earth**3) / GM))
    return orbitalPeriod


def orbitalPeriod(arr):
    for x in range(0, len(arr)):
        arr[x]["orbitalPeriod"] = calc(arr[x])
        arr[x].pop("avgAlt")
    return arr
