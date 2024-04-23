import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "../PlaceItem";
import { IPlace } from "../../../interfaces";
import { styles } from "./style";

interface IPlacesListProps {
  places: IPlace[];
}

const PlacesList: React.FC<IPlacesListProps> = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  function handleSelect() {}

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={handleSelect} />
      )}
    />
  );
};

export default PlacesList;
