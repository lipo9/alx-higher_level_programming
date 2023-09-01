#!/usr/bin/python3
"""
Python script that takes in a URL and an email, sends a POST
request to the passed URL with the email as a parameter, and
displays the body of the response
"""
from urllib import request, parse
import sys


if __name__ == "__main__":
    my_email = {'email': str(sys.argv[2])}
    data = parse.urlencode(my_email)
    data = data.encode('ascii')
    req = request.Request(str(sys.argv[1]), data)
    with request.urlopen(req) as response:
        body = response.read()
        print(body.decode('utf-8'))
