import NavBar from "@/components/NavBar";
import Question from "@/components/Question";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function Index() {
  const [data, setData] = useState<any>([]);
  const qus = useSelector<any>((state) => state.questions);

  useEffect(() => {
    setData(qus);
  }, []);
  return (
    <View>
      <View style={tw`h-8`}></View>
      <NavBar />
      <Question data={data} />
    </View>
  );
}
