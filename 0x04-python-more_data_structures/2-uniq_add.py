#!/usr/bin/python3
def uniq_add(my_list=[]):
    sum_uniq = 0
    for x in set(my_list):
        sum_uniq += x
    return (sum_uniq)
