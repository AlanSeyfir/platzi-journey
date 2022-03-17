def converter(currency, dolar_value):
    pesos = input("¿Cuantos pesos " + currency + " tienes: ")
    pesos = float(pesos)

    dolares = pesos / dolar_value
    dolares = round(dolares, 2)
    dolares = str(dolares)

    print("Tienes $ " + dolares + " dolares")

#With triple """ I can print the string with the spaces
menu = """
Bienvenido al cambio de divisas, moneda a USD

1.Pesos colombianos
2.Pesos argentinos
3.Pesos mexicanos

Elige una opcion: """
opcion = input(menu)

if opcion == '1':
    converter("colombianos", 3875)
elif opcion == '2':
    converter("argentinos", 65)
elif opcion == '3':
    converter("mexicanos", 24)
else:
    print("Porfavor ingrese un numero valido")