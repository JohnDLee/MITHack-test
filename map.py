import json
import os
import numpy as np

frames = os.listdir('im_folder')

im_map = {j:frames[j] for j,i in enumerate(np.linspace(0, 90, len(frames))) }

with open("map.json", 'w') as f:
    json.dump(im_map,f, sort_keys=True)