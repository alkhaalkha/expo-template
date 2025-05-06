import { useNavigation } from "@react-navigation/native";
import { Dimensions, Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Register() {

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
            }}>Register</Text>

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
                    <Text>Password : </Text>
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
                }}>
                    <Text style={{
                        fontFamily: "Inter-Black",
                        color: "white",
                    }}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection :"row",
                justifyContent :"center",
                alignItems :"center",
                marginTop: 10,
            }}>

                <Text style={{
                    textAlign: "center",
                }}>Sudah mempunyai Akun? Silahkan {" "}
                </Text>

                <TouchableOpacity style={{
                }} onPress={() => {
                    nav.navigate("login") 
                }}>
                    <Text style={{
                        fontWeight :"bold"
                    }}>login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}