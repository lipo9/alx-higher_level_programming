#!/usr/bin/python3
for n in range(90):
    if n % 10 > n / 10:
        print("{:02d},".format(n), end=' ') if n != 89 else print(f"{n:02d}")
