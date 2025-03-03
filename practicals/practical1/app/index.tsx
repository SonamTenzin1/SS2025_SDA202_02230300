import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.citypng.com%2Fphoto%2F27962%2Fhd-gojek-logo-icon-transparent-background&psig=AOvVaw3-G7PCZi5Iywg0F08tyrDG&ust=1741110460771000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjPyYa87osDFQAAAAAdAAAAABAL" }} style={styles.logo} />
      
      <Text style={styles.title}>Welcome to Gojek</Text>
      <Text style={styles.subtitle}>Sign in or create an account to get started</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/signUp")}> 
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => router.push("/signUp")}> 
        <Text style={[styles.buttonText, styles.signupText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#008000",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#008000",
  },
  signupText: {
    color: "#008000",
  },
});
