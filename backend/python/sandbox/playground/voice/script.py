import pyttsx3

engine = pyttsx3.init()

engine.setProperty('rate', 150)  # Speed of speech (higher = faster)
engine.setProperty('volume', 1)  # Volume (range from 0.0 to 1.0)

script = """

    Hello guys, I' am aspiring Software Engineer

"""

engine.save_to_file(script, 'output_voice.mp3')

engine.runAndWait()

print("Voice file has been generated successfully: 'output_voice.mp3'")