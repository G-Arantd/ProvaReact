import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import React from "react";

type Props = {
  onChangeNumber: () => void;
  texts: string;
  style: object;
};

export default function Buttons(props: Props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={style.touchableContainer}
        onPress={props.onChangeNumber}
      >
        <Text style={style.buttonText}>{props.texts}</Text>
      </TouchableOpacity>
    </View>
  );
}