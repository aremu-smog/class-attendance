import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ClassScreen } from "./src/screens/class"
import { NavigationContainer } from "@react-navigation/native"
import { StudentScreen } from "./src/screens"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

const Stack = createNativeStackNavigator()
export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: 20 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Class' component={ClassScreen} />
					<Stack.Screen name='Student' component={StudentScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	)
}
