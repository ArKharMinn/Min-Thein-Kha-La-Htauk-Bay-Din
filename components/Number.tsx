import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import tw from "twrnc";

const Number = ({ number, clickHandling }: any) => {
  return (
    <View style={tw`flex-row flex-wrap justify-center gap-2`}>
      {number.map((num: any, index: number) => (
        <TouchableWithoutFeedback key={index} onPress={clickHandling}>
          <View
            style={tw`w-10 h-10 bg-[#5C271F] shadow-lg flex justify-center items-center rounded-full`}
          >
            <Text style={tw`text-white text-sm font-medium`}>{num}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Number;
