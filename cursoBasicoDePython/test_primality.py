def is_prime(number):
    counter = 0
    for i in range(1, number + 1):
        if i == 1 or i == number:
            continue
        if number % i == 0:
            counter += 1
    if counter == 0:
        return True
    else:
        return False

def run():
    number = int(input("Write a number: "))
    if is_prime(number):
        print("Is prime")
    else:
        print("It's not prime")


def test_prime():
    number = int(input("Write a number: "))
    counter = 0

    if number % 2 == 1:
        return True
    else:
        return False


if __name__ == '__main__':
    # if test_prime():
    #     print("esto es true")
    # else:
    #     print("Esto es False")
    
    run()