a = (True, False) * 2
b = sum(a) == len(a) / 2
c = all(a) or any(a) and not b

print ( a, b, c )