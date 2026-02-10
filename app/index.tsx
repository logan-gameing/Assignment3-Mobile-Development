import { View } from "react-native";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/app/login-register/login.tsx"></Link>
    </View>
  );
}
