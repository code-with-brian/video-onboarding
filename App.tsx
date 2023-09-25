import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function App() {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    //handler to get device Height
    setHeight(Dimensions.get("window").height);
    //handler to get device Width
    setWidth(Dimensions.get("window").width);
  }, []);

  return (
    <View>
      <StatusBar style="auto" />
      <Video
        source={require("./assets/video/stock-scrolling.mp4")}
        style={{
          height: height,
          width: width,
        }}
        isMuted={true}
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        rate={1.0}
        shouldPlay={true}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start using the app</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: "#176B87",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
});
