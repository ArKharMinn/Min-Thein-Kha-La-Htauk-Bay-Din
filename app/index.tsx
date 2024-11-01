import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function Index() {
  const [data, setData] = useState<any>([]);
  const qus = useSelector<any>((state)=>state.questions)
 
  useEffect(() => {
    setData(qus);    
  }, []);
  return (
    <View>
      <View style={tw`h-8`}></View>
      <View
        style={tw`flex-row items-center justify-between px-3 py-1 bg-blue-500`}
      >
        <Image
          source={require("@/assets/images/mintheinkha.png")}
          style={tw`w-10 h-10 rounded-full`}
        />
        <Text style={tw`text-white`}>La Htauk Bay Din</Text>
      </View>
      <ScrollView
        contentContainerStyle={tw`pb-25`}
        showsVerticalScrollIndicator={false}
      >
        {data.map((data:any) => {
          return (
            <TouchableOpacity
              key={data.questionNo}
              onPress={() => router.push(`/number/${data.questionNo}`)}
            >
              <View style={tw`m-2 bg-[#5C271F] p-3 rounded-lg`}>
                <Text style={tw`text-white`}>{data.questionName}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
