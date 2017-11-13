import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import CameraStyles from '../Styles/cameraStyle';

class CameraAccess extends Component {

  takePicture() {
    const options = {};
    const handleOnChange = this.props.navigation.state.params.handleOnChange
    const navigation = this.props.navigation
    const {groupId, userId} = this.props.navigation.state.params
    this.camera.capture({metadata: options})
    .then(function(response) {
      const data = response;
      const url = "http://localhost:3000/expenses/camera"
      // const url = "https://rocky-forest-46725.herokuapp.com/expenses/camera"
      fetch(url,
      {method: 'post',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    }).then(function(response) {
      return response.json() }
  ).then(function(responseJson) {
      handleOnChange(responseJson.total, groupId, userId)
      navigation.goBack()
    })
  })
  }
  render() {
    return (
      <View style={CameraStyles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={CameraStyles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.memory}>
          <Text style={CameraStyles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

export default CameraAccess ;
