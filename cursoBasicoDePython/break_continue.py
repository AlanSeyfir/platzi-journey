def run():
    for counter in range(1000):
        if counter % 2 != 0:
            continue
        print(counter)

    for i in range(10000):
        print(i)
        if i == 5678:
            break

    text = input("Write a text: ")
    for letter in text:
        if letter == "o":
            break
        print(letter)


if __name__ == '__main__':
    run()