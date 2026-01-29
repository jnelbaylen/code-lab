import pyqrcode
import png
from pyqrcode import QRCode

# Data to encode
u = "johnnelbaylen.vercel.app"

# Generate QR code
url = pyqrcode.create(u)

# Save as SVG file
url.svg("myqr.svg", scale=8)

# Save as PNG file
url.png("myqr.png", scale=6)

print(f"QR code for: {u}")
