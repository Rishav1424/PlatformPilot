import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  const showToast = (message) => {
    Toast.show({
      type: "success",
      position: "top",
      text1: message,
      text2: "This is a toast message!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search here..." />

      {/* MapWorks Section */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapText}>MapWorks</Text>
      </View>

      {/* Scrollable Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContainer}
        >
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Toilets")}
          >
            <Text style={styles.tabText}>Toilets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Restrooms")}
          >
            <Text style={styles.tabText}>Restrooms</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Restaurants")}
          >
            <Text style={styles.tabText}>Restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Cafes")}
          >
            <Text style={styles.tabText}>Cafes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Parks")}
          >
            <Text style={styles.tabText}>Parks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Gyms")}
          >
            <Text style={styles.tabText}>Gyms</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Hospitals")}
          >
            <Text style={styles.tabText}>Hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Schools")}
          >
            <Text style={styles.tabText}>Schools</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Libraries")}
          >
            <Text style={styles.tabText}>Libraries</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => showToast("Banks")}
          >
            <Text style={styles.tabText}>Banks</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Toast Component */}
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  searchBar: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  mapText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
  tabsWrapper: {
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
});
