import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    business && (
      <View>
        <Heading text={"About"} />
        <Text
          style={{
            fontFamily: "outfit",
            lineHeight: 28,
            fontSize: 16,
            color: Colors.GARY,
          }}
          numberOfLines={isReadMore ? 20 : 5}
        >
          {business.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text
            style={{
              fontFamily: "outfit",

              fontSize: 16,
              color: Colors.PRIMARY,
            }}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
