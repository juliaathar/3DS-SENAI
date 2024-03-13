import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//1- instanciar a camera
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

export default function App() {

  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>
      {/* 2- chamando a camera */}
      <Camera
        type={cameraType}
        style={styles.camera}

        ratio={'16:9'}
      >

        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>

      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '80%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  btnFlip: {
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20
  }
});
