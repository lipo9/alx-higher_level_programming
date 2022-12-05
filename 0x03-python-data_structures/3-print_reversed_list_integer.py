#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    if not my_list:
        pass
    else:
        rl = my_list
        rl.reverse()
        for i in range(len(rl)):
            print("{:d}".format(rl[i]))
