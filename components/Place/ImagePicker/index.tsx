import { View, Text, Button, Alert, Image } from "react-native";
import React, { useState } from "react";
import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import { styles } from "./style";
import OutlinedButton from "../../UI/OutlinedButton";

const ImagePicker = () => {
  const [imageUri, setImageUri] = useState<string>();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant camera permission to use this app"
      );

      return false;
    }
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    // if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
    setImageUri(image?.assets[0].uri);
  }
  let previewImage = <Text>No image taken yet.</Text>;
  if (imageUri) {
    previewImage = <Image style={styles.image} source={{ uri: imageUri }} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{previewImage}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;
