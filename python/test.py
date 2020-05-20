# -*- coding: utf-8 -*-
import pyaudio,os
import speech_recognition as sr
import platform
import subprocess
import sys

def mainfunction(source):
    audio = r.listen(source)
    text = r.recognize_sphinx(audio)
    print(text)

if __name__ == "__main__":
    # neuralNetwork.init()
    r = sr.Recognizer()
    with sr.Microphone() as source:
        while 1:
            mainfunction(source)