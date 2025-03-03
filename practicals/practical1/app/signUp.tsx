import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const countries = [
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹" },
];

export default function SignupScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.countryCode}>{selectedCountry.flag} {selectedCountry.code}</Text>
        </TouchableOpacity>
        <TextInput 
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList 
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.countryItem} onPress={() => { setSelectedCountry(item); setModalVisible(false); }}>
                  <Text style={styles.countryText}>{item.flag} {item.name} ({item.code})</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 5, color: "#333" },
  inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 20 },
  countryCode: { fontSize: 16, fontWeight: "600", marginRight: 10 },
  input: { flex: 1, fontSize: 16 },
  button: { backgroundColor: "#008000", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  modalContainer: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: "60%" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  countryItem: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#eee" },
  countryText: { fontSize: 16 },
});