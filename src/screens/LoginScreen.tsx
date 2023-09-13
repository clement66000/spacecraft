import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { TextInput, Text, useTheme, Button } from "react-native-paper";

import { Header } from "~/components/Header";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);
  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }

  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"SpaceCraft"} />
      <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
        <TextInput
          style={styles.mt20}
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          returnKeyType="next"
          keyboardType="email-address"
          autoComplete="email"
        />
        <TextInput
          style={styles.mt20}
          label="Password"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          autoComplete="password"
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              icon={isVisble ? "eye-off" : "eye"}
            />
          }
        />
        <Button
          mode="contained"
          style={[styles.mt20, { marginHorizontal: 30 }]}
        >
          Login
        </Button>
      </View>
      <View
        style={[styles.mt20, { marginHorizontal: 10, alignItems: "center" }]}
      >
        <Text style={{ color: theme.colors.secondary }}>
          by login you accept the Terms and conditions
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mt20: {
    marginTop: 20,
  },
});

export default LoginScreen;
