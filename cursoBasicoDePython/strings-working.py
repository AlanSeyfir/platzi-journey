nombre = input("Cual es tu nombre")

#Input: Facundo
nombre.upper() #FACUNDO
nombre.capitalize() #Facundo
nombre.strip() #Facundo without spaces
nombre.lower() #facundo
nombre.replace("u", "o") #Facondo

#We can modify or get an specific letter
nombre[1] #a
nombre[0] #F

#Return how many characters the string has
len("Hola me encanta esto oh yea jsjs") #32

#Now the variable will stay capitalize
nombre = nombre.capitalize
#Now the variable will store a letter
letra = nombre[0]