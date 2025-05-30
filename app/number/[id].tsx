import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const number = () => {
  const num = useSelector<any>((state) => state.numberList);
  const [number, setNumber] = useState<any>([]);
  const { id } = useLocalSearchParams();
  const [showAns, setAns] = useState(false);
  const [answer, setAnswer] = useState("");
  const question = useSelector((state) => state.questions);
  const qus = question.find((item: any) => item.questionNo === Number(id));
  const ans = useSelector((state) => state.answers);

  useEffect(() => {
    setNumber(num);
  }, [id, qus]);

  const clickHandling = () => {
    const randamData = ans.filter(
      (item: any) => item.questionNo === Number(id)
    );
    const randamIndex = Math.floor(Math.random() * randamData.length);
    const result = randamData[randamIndex];
    setAnswer(result.answerResult);
    setAns(true);
  };

  return (
    <View style={tw`flex-1 mt-4 bg-[#F5F5F5]`}>
      {/* Header */}
      <View style={tw`pt-4 px-4`}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-circle-sharp"
            size={32}
            color="#5C271F"
            style={tw`shadow-md`}
          />
        </TouchableWithoutFeedback>
      </View>

      {/* Main Content */}
      <View style={tw`flex-1 items-center justify-center px-6`}>
        <View style={tw`w-full max-w-md`}>
          {/* Question Card */}
          <View
            style={tw`bg-white p-3 rounded-xl shadow-md mb-8 border border-[#5C271F]/10`}
          >
            <Text style={tw`text-sm font-semibold text-center text-[#5C271F]`}>
              {qus.questionName}
            </Text>
          </View>

          {/* Number Grid */}
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
        </View>
      </View>

      {/* Answer Modal */}
      <Modal animationType="fade" transparent visible={showAns}>
        <TouchableWithoutFeedback onPress={() => setAns(false)}>
          <View
            style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}
          >
            <View style={tw`absolute top-10 right-6`}>
              <AntDesign name="closecircleo" size={32} color="white" />
            </View>

            <View style={tw`bg-white p-6 rounded-xl w-4/5 max-w-md`}>
              <View style={tw`items-center mb-4`}>
                <Image
                  source={require("@/assets/images/mintheinkha.png")}
                  style={tw`w-32 h-32`}
                  resizeMode="contain"
                />
              </View>
              <Text style={tw`text-center text-sm text-[#5C271F]`}>
                {answer}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default number;
