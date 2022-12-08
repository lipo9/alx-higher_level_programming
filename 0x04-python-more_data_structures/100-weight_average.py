#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0
    a = 0
    b = 0
    for elem in my_list:
        a += elem[0] * elem[1]
        b += elem[1]

    return (a / b)
