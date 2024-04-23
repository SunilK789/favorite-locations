import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { IPlace } from "../../../interfaces";

interface IPlaceItemProps {
  place: IPlace;
  onSelect: () => void;
}

const PlaceItem: React.FC<IPlaceItemProps> = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
