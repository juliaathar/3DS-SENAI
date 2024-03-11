import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Importando dependencia do mapa
import MapView, { Marker } from 'react-native-maps';
import {
  //solicita o acesso a localizacao
  requestForegroundPermissionsAsync,

  //recebe a localizacao atual
  getCurrentPositionAsync
} from "expo-location"
import { useEffect, useState } from 'react';

export default function App() {

  const [initialPosition, setInitialPosition] = useState(null);

  async function fetchLocation() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const captureLocation = await getCurrentPositionAsync()

      setInitialPosition(captureLocation);
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [1000])
  return (
    <View style={styles.container}>
      {
        initialPosition != null
          ? (
            <MapView
              //marca o ponto de inicio 
              initialRegion={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
              style={styles.map}
            >
              <Marker 
                coordinate={{
                  latitude: initialPosition.coords.latitude,
                  longitude: initialPosition.coords.longitude,
                }}
                title='Initial position'
                pinColor={"red"}
              />
            </MapView>
          ) : (
            <>
              <Text>Location not found</Text>
              <ActivityIndicator />
            </>
          )
      }
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
  map: {
    flex: 1,
    width: "100%"
  }
});
