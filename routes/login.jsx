import { useNavigation } from "@react-navigation/native";
import { Dimensions, Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {

    const nav = useNavigation()

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Text style={{
                fontFamily: "Inter-Black",
                textAlign: "center",
                fontSize: 30,
                marginTop: 250
            }}>Login</Text>

            <View style={{
                marginHorizontal: 20
            }}>
                <View style={{
                    marginTop: 20
                }}>
                    <Text>Username : </Text>
                    <TextInput style={{
                        borderWidth: 1,
                        borderBlockColor: "black",
                        borderRadius: 10
                    }} placeholder="Masukkan username" />
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{
                    }} >Password : </Text>
                    <TextInput style={{
                        borderWidth: 1,
                        borderBlockColor: "black",
                        borderRadius: 10
                    }} placeholder="Masukkan password" />
                </View>

                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    backgroundColor: "black",
                    paddingVertical: 5,
                    borderRadius: 10
                }} onPress={() => {
                    nav.navigate("home")
                }} >
                    <Text style={{
                        fontFamily: "Inter-Black",
                        color: "white",
                    }}>Login</Text>
                </TouchableOpacity>

            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
            }}>

                <Text style={{
                    textAlign: "center",
                }}>Belum mempunyai Akun? Silahkan {" "}
                </Text>

                <TouchableOpacity style={{

                }} onPress={() => {
                    nav.navigate("register")
                }}>
                    <Text style={{
                        fontWeight: "bold"
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}