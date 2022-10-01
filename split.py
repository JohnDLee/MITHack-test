import cv2
import os
vidcap = cv2.VideoCapture('IMG_6318.MOV')
vidcap.set(cv2.CAP_PROP_FPS, .10)
test = 'im_folder'
def getFrame(sec, count, i):
    hasFrames,image = vidcap.read()
    if hasFrames:
        image = cv2.pyrDown(image)
        cv2.imwrite(os.path.join(test, "%06d"%count+".png"), image)     # save frame as JPG file
    return hasFrames
sec = 0
count = 0
i = 0
frameRate = 10
success = getFrame(sec, count, i)
while success:
    sec = sec + frameRate
    sec = round(sec, 2)
    success = getFrame(sec, count, i)
    count = count + 1
