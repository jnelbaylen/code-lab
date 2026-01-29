from langdetect import detect

while True:
    
    message = input("How are you ? ")

    print(detect(message))