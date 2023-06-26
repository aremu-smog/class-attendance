import React, { useState } from "react"
import { Pressable, View, Text, StyleSheet } from "react-native"
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
		<View style={styles.container}>
			<View>
				<Text>Select your class {selectedClass}</Text>
				<SelectDropdown
					data={classes}
					buttonStyle={styles.dropdown}
					buttonTextStyle={styles.dropdownText}
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

			<Pressable
				style={styles.pressable}
				disabled={!selectedClass}
				onPress={gotoStudentScreen}>
				<Text style={{ color: "white" }}>Continue</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		background: "white",
		padding: 20,
	},
	label: {},
	dropdown: {
		backgroundColor: "white",
		width: "100%",
		textAlign: "left",
		borderRadius: 10,
		marginTop: 10,
	},
	dropdownText: {
		textAlign: "left",
	},
	pressable: {
		backgroundColor: "#7864FF",
		width: "100%",
		marginTop: "auto",
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 50,
		borderRadius: 10,
	},
})
export default ClassScreen
