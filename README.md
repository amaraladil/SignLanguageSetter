# Sign Language Reader ✋🤚

This project is a Sign Language Reader that utilizes TensorFlow and Python to interpret 5 different hand gestures in real-time via a webcam feed. The AI model identifies each gesture and displays the accuracy of its prediction live.

The model was trained using TensorFlow and then exported to JSON for integration with a React website. While the current demo is hosted online, it performs optimally when run locally in Python due to limitations in converting the AI model for web deployment.
Live Demo

Check out the live demo of the React integration [here](https://sign-language-reader.netlify.app/).
## Features

  + Real-Time Gesture Detection: Recognizes 5 hand gestures and displays the prediction accuracy in real-time.
  + TensorFlow-Powered AI: Leverages a custom-trained model for accurate gesture detection.
  +  Python Backend: Full potential realized in Python for seamless operation.
  +  React Integration: AI model exported as JSON and embedded into a React app for a web-based demo.

### Requirements

> Node.js: Latest version \
> TensorFlow: Install TensorFlow \
> Anaconda 3: Version 2019.07 or higher


#### To Run on your local python anaconda, run these code on Jupyter Notebook or any other similar notebooks

Inside ModelTrainer.ipynb

##### \#0 Setup Path

```
WORKSPACE_PATH = 'Tensorflow/workspace'
SCRIPTS_PATH = 'Tensorflow/scripts'
APIMODEL_PATH = 'Tensorflow/models'
ANNOTATION_PATH = WORKSPACE_PATH+'/annotations'
IMAGE_PATH = WORKSPACE_PATH+'/images'
MODEL_PATH = WORKSPACE_PATH+'/models'
PRETRAINED_MODEL_PATH = WORKSPACE_PATH+'/pre-trained-models'
CONFIG_PATH = MODEL_PATH+'/my_ssd_mobnet/pipeline.config'
CHECKPOINT_PATH = MODEL_PATH+'/my_ssd_mobnet/'
```

##### \# 4. Copy Pre-Model Config to Training Folder

```
CUSTOM_MODEL_NAME = 'my_ssd_mobnet'
```

##### \# 5. Update Config For Transfer Learning

```
All of it
```

##### \# 7. Load Train Model From Checkpoint

```
All of it
```

##### \# 8. Detect in Real-Time

```
All before cap.release
```

Doing all of these lines will run the trained model locally.

## Future Improvements

    Model Optimization for Web: Enhancing performance for web demos.
    More Gestures: Expanding the model to support additional hand gestures.
    Mobile Support: Adapting the model for mobile devices.

Feel free to fork, star ⭐, or contribute to this project! If you encounter any issues or have questions, please open an issue.

Author: Amar Al-Adil

