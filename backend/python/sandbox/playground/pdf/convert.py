from fpdf import FPDF
import os

pdf = FPDF()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(BASE_DIR, "images")

imagelist = [
    os.path.join(IMAGES_DIR, "success.png"),
    os.path.join(IMAGES_DIR, "dog.png"),
    os.path.join(IMAGES_DIR, "girl.png")
]

for image in imagelist:
    print(f"Checking: {image} => Exists: {os.path.exists(image)}")
    pdf.add_page()
    pdf.image(image, x=10, y=10, w=190)

pdf.output("output.pdf")
