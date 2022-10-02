import json
import os
import numpy as np

frames = sorted(os.listdir('im_folder'))

im_map = ','.join(['im_folder/' + frames[j] for j,i in enumerate(np.linspace(0, 90, len(frames)))])

with open("map.txt", 'w') as f:
    json.dump(im_map,f, sort_keys=True)