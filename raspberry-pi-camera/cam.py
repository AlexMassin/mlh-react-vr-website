picamera import PiCamera
from time import sleep
import boto3
import os.path
import subprocess
s3 = boto3.client('s3')
bucket = 'cambucket21'
camera = PiCamera()
#camera.resolution(1920,1080)
x = 0
camerafile = x

while True:

if (x == 6):
x = 1
else:
x = x + 1

camera.start_preview()
camera.start_recording('/home/pi/' + str(x) + '.h264')
sleep(2)
camera.stop_recording()
camera.stop_preview()
subprocess.Popen("MP4Box -add " + str(x) + ".h264 " + str(x) +".mp4", shell=True)
sleep(1)
s3.upload_file('/home/pi/' + str(x) + '.mp4',bucket,'/home/pi/' + str(x) + '.mp4')
