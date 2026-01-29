import time
import sys

lyrics = [
   "'Di sasayangin ang oras at pag-ibig mo",
    "Mas pipiliin kong",
    "Ibigay lahat pati itong aking mundo (oh)\n",

    "Halika't sumayaw sa ilalim ng bituin",
    "Habang ako'y nakatingin sa 'yo (oh)",
    "Wala na 'kong ibang mahihiling",
    "Saksi ang langit sa 'tin"
]

def typeLine(line):
    for char in line:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(0.20)  
    print()

def music():
    print()
    for line in lyrics:
        typeLine(line)
        time.sleep(0.25)

music()
