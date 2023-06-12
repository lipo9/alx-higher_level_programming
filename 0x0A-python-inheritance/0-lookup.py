#!/usr/bin/python3
"""
No class definition here
"""


def lookup(obj):
    """
    Function that returns the list of available attributes
    and methods of an object
    Args:
        obj: instance of the class
    Return:
        List of attributes
    """

    return dir(obj)
