from flask import Flask, render_template,request, redirect
from imageai.Detection import ObjectDetection
from flask_sqlalchemy import SQLAlchemy

def detect_objects_on_road(input_image, model_path):
    detector = ObjectDetection()
    detector.setModelTypeAsYOLOv3()
    detector.setModelPath(model_path)
    detector.loadModel()

    detections = detector.detectObjectsFromImage(
        input_image=input_image,
        output_image_path="output_image.jpg",
        minimum_percentage_probability=30)

    return detections
    
Remember = [
        'Hola! Soy una IA de seguridad vial',
        "Respeta los semáforos",
        "Lleva siempre puesto el cinturón de seguridad",
        "En caso de usar motocicleta o bicicleta, usa casco",
        "Restringe el consumo de alcohol",
        "Evita las distracciones",
        "Promueve la seguridad vial",
        "Vigila tu velocidad",]

for x in Remember:
      print('*-----------------------------------------------------*')
      print(x)

input_image = "input_image.jpg"
model_path = "/content/yolov3.pt"

def Detectores():
    detections = detect_objects_on_road(input_image, model_path)
    if detections:
        print('*---------------------------------------*')
        print("Objetos detectados:")
        for obj in detections:
            print('*---------------------------------------*')
            print(obj["name"], " : ", obj["percentage_probability"], " : ", obj["box_points"])
            
    else:
        print("No se detectaron objetos.")

