import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

const number = () => {
  const num = useSelector<any>((state)=>state.numberList)
  const [number,setNumber] = useState<any>([])
  const { id } = useLocalSearchParams();
  const [showAns, setAns] = useState(false);
  const [answer, setAnswer] = useState("");
  const question = useSelector((state)=>state.questions)
  const qus = question.find((item:any)=>item.questionNo === Number(id))
  const ans = useSelector((state)=>state.answers)
  
  useEffect(() => {
    setNumber(num);
  }, [id,qus]);

  const clickHandling = () => {
    const randamData = ans.filter((item:any)=>item.questionNo === Number(id))
    const randamIndex = Math.floor(Math.random()*randamData.length)
    const result = randamData[randamIndex]
    setAnswer(result.answerResult)
    setAns(true);
  };
  return (
    <View>
      <View style={tw`h-9`}></View>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <Ionicons
          style={tw` px-5`}
          name="arrow-back-circle-sharp"
          size={24}
          color="black"
        />
      </TouchableWithoutFeedback>
      <Modal animationType="slide" transparent visible={showAns}>
        <TouchableWithoutFeedback onPress={() => setAns(false)}>
          <View style={tw`bg-black bg-opacity-50 h-full`}>
            <AntDesign
              name="closecircleo"
              size={24}
              color="white"
              style={tw`text-center top-3`}
            />
            <View style={tw`h-full flex items-center justify-center`}>
              <View style={tw`m-2 p-2 bg-white gap-3 rounded-lg shadow-xl bottom-10`}>
                <View style={tw` items-center justify-center`}>
                <Image
                  source={require("@/assets/images/mintheinkha.png")}
                  style={tw`w-40 h-40 items-center justify-center`}
                />
                </View>
                <Text style={tw``}>{answer}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={tw`h-full w-full flex items-center justify-center`}>
        <View style={tw`bottom-10 gap-3`}>
          <View style={tw`m-2`}>
          
                <View
                  
                  style={tw` p-2 m-1`}
                >
                    <Text style={tw`font-semibold text-center`}>{qus.questionName}</Text>
                </View>
              
          </View>
          <View style={tw`flex-row flex-wrap justify-center`}>
            {number.map((num:any, index:number) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => clickHandling()}
                >
                  <View
                    style={tw`m-1 w-8 h-8 bg-[#5C271F] shadow-lg flex justify-center items-center rounded`}
                  >
                    <Text style={tw`text-white text-[13px]`}>{num}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default number;
