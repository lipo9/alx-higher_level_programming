#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    length = len(my_list)

    newList = my_list[:]

    if idx < length and idx >= 0:
        newList[idx] = element

    return newList
