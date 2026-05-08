import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to TaskFlow</Text>
        <Text style={styles.subtitle}>
          made by Psalm Salcedo
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/tasks")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: 720,
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 32,
    padding: 32,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    color: "#0f172a",
    marginBottom: 16,
  },
  subtitle: {
    textAlign: "center",
    color: "#475569",
    marginBottom: 32,
    lineHeight: 24,
  },
  button: {
    alignSelf: "center",
    borderRadius: 32,
    backgroundColor: "#334155",
    paddingVertical: 16,
    paddingHorizontal: 32,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
