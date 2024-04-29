import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

const PlaceForm = () => {
  const [title, setTitle] = useState();
  function onTitleChanged() {}
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={onTitleChanged} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;
