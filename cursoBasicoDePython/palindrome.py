#After every function is a GOOD practice to have 2 spaces (enters)
def palindrome(word):
    word = word.replace(" ", "")
    word = word.lower()
    inverted_word = word[::-1]
    if word == inverted_word:
        return True
    else:
        return False


def run():
    word = input("Escribe una palabra: ")
    is_palindrome = palindrome(word)
    if is_palindrome == True:
        print("Is a palindrome")
    else:
        print("Is NOT a palindrome")


if __name__ == "__main__":
    run()