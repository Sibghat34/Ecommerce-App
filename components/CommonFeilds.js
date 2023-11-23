import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CommonFeilds = (title) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      
      <View style={{ marginTop: 70 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#D0D0D0",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <MaterialIcons name="email" size={24} color="gray" />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              color: "gray",
              marginVertical: 5,
              width: 250,
              fontSize: email ? 16 : 16,
            }}
            placeholder="Enter email"
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#D0D0D0",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Entypo name="lock" size={24} color="gray" />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={{
              color: "gray",
              marginVertical: 5,
              width: 250,
              fontSize: password ? 16 : 16,
            }}
            placeholder="Enter password"
          />
        </View>
      </View>
    </>
  );
};

export default CommonFeilds;

const styles = StyleSheet.create({});
