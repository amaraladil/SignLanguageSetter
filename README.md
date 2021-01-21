# Sign Language Reader

This is created with the tensorflow library and Python. It manages to understand 5 different hand gestures and points out the accuracy with what each gesture is currently live on the webcam.

The website demo has some issues when converting it to support a website, python is best to see it's full potential.

Currently has a Live Demo: [here](https://sign-language-reader.netlify.app/)

### Requirements:

> NPM @ Version -- latest
> Tensorflow
> Anaconda 3 @ Version -- 2019.07

#### To Run on your local python anaconda, run these code on Jupyter Notebook

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
