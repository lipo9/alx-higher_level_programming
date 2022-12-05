#!/usr/bin/python3
def multiple_returns(sentence):
    sentence_length = len(sentence)

    if (sentence_length == 0):
        res_tuple = (sentence_length, None)
    else:
        res_tuple = (sentence_length, sentence[0])

    return (res_tuple)
