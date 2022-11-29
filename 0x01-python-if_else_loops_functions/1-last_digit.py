#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

if number >= 0:
    z = number % 10
else:
    z = number % -10

print(f"Last digit of {number:d} is {z:d}", end=' ')

if z > 5:
    print("and is greater than 5")
elif z == 0:
    print("and is 0")
else:
    print("and is less than 6 and not 0")
