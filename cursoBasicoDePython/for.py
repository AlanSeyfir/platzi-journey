counter = 1
def using_while():
    print(counter)
    while counter < 1000:
        counter += 1
        print(counter)


def using_for():
    for counter in range(1,1001):
        print(counter)


if __name__ == '__main__':
    # a = list(range(1000))
    # print(a)

    for i in range(10):
        print(11 * i)

    #using_for()