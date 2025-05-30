import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const Question = ({ data }: any) => {
  return (
    <ScrollView
      contentContainerStyle={tw`px-4 py-2 pb-45`}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw` gap-4`}>
        {data.map((item: any) => (
          <TouchableOpacity
            key={item.questionNo}
            onPress={() => router.push(`/number/${item.questionNo}`)}
            activeOpacity={0.9}
          >
            <View
              style={tw`bg-[#5C271F] p-5 rounded-xl shadow-md 
                border border-[#5C271F]/20`}
            >
              <Text style={tw`text-white/80 font-medium`}>
                Question #{item.questionNo}
              </Text>
              <Text style={tw`text-sm font-semibold text-white`}>
                {item.questionName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Question;
