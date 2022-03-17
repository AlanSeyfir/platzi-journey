# counter = 0
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 1
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 2
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 3
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 4
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 5
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

# counter = 6
# print("2 ^ " + str(counter) + " is equal to: " + str(2 ** counter))

def run():
    LIMIT = 1000000
    counter = 0

    potency_2 = 2 ** counter
    while potency_2 < LIMIT:
        print("2 ^ " + str(counter) + " is equal to " + str(potency_2))
        counter = counter + 1
        potency_2 = 2 ** counter


if __name__ == '__main__':
    run()