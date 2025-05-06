import { createStackNavigator } from "@react-navigation/stack";
import Login from "./routes/login";
import Register from "./routes/register";
import Home from "./routes/Home";

const Stack = createStackNavigator()

export default function Route() {
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}