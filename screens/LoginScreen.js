import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommonFeilds from "../components/CommonFeilds";

const LoginScreen = () => {
  const navigation = useNavigation();

  function RegisterScreenNavigation() {
    navigation.navigate("SignUp");
  }

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image
          style={{ width: "150px", height: "150px" }}
          source={{
            uri: "https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#041E42" }}>
            Login In to your account
          </Text>
        </View>
        <CommonFeilds />
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in.</Text>
          <Text style={{ color: "#007FFF" }}>Forgot password</Text>
        </View>

        <Pressable
          style={{
            width: 100,
            backgroundColor: "#AE445A",
            borderRadius: 10,
            padding: 10,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
            Login
          </Text>
        </Pressable>
        <Pressable onPress={RegisterScreenNavigation} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 200,
  },
});
