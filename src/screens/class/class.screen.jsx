import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import classes from "./data.json"
import SelectDropdown from "react-native-select-dropdown"
import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"

const ClassScreen = ({}) => {
	const [selectedClass, setSelectedClass] = useState(null)
	const navigation = useNavigation()

	const gotoStudentScreen = () => {
		navigation.navigate("Student", {
			classId: selectedClass,
		})
	}
	return (
		<View>
			<View>
				<Text>Select your class {selectedClass}</Text>
				<SelectDropdown
					data={classes}
					onSelect={selectedItem => {
						setSelectedClass(selectedItem.id)
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem.name
					}}
					rowTextForSelection={(item, index) => {
						return item.name
					}}
				/>
			</View>

			<Pressable disabled={!selectedClass} onPress={gotoStudentScreen}>
				<Text>Continue</Text>
			</Pressable>
		</View>
	)
}

export default ClassScreen
