---
id: doc1
title: Installation
sidebar_label: Installation
---

The react native chat app is a boilerplate for any react native developer who wants to build a chat app.

The goal of this boilerplate is to provide a fully functional chat app which can be reused with very little to no modification.

## Clone the Github Project

```
git clone git@github.com:recraftrelic/react-native-chat-app-boilerplate.git
```

## Installing the Dependencies

Enter inside the root directory of the project folder 
```
cd react-native-chat-app-boilerplate
```

Now install the required dependencies for the project 
```
yarn install
```

## Run the Project in Development Mode

You can directly run the app

### iOS Devices
```
npx react-native run-ios
```

### Android Devices
```
npx react-native run-android
```

### Facing any error related to pods

Inside the root directory you need to install the cocoapods
```
sudo gem install cocoapods
```

Now enter inside the ios folder present inside the root directory & install the pod
```
cd ios
pod install
```

After installing the pod you need to return back to the root directory & run the app
```
cd.. 
npx react-native run-ios
```
