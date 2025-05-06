import { useFonts } from "expo-font"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Route from "./route"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  const [loaded] = useFonts({
    "Inter-Black": require("./assets/Font/InterBlack900.otf"),
    "Inter-Italic": require("./assets/Font/InterBlackItalic900.otf"),
  })

  if (!loaded) return <View style={styles.container}>
    <Text>Font masih loading</Text>
  </View>
  return (

    <NavigationContainer>
      <Route />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})