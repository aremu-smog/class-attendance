import React, { useEffect, useState } from "react"
import { View, Text, Pressable, Alert, StyleSheet } from "react-native"
import students from "./data.json"
import { useNavigation, useRoute } from "@react-navigation/native"

const StudentScreen = () => {
	const [studentsInClass, setStudentsInClass] = useState([])
	const [currentStudent, setCurrentStudent] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const navigation = useNavigation()
	const { params } = useRoute()

	const { classId } = params

	useEffect(() => {
		console.log({ classId })
		setStudentsInClass(() => {
			return students.filter(({ class_id }) => classId === class_id)
		})
	}, [])

	const studentInfo = studentsInClass[currentStudent]

	const { first_name, last_name } = studentInfo ?? {}

	const markAttendance = isPresent => {
		setIsLoading(true)
		setTimeout(async () => {
			if (currentStudent < studentsInClass.length) {
				await Alert.alert(isPresent ? "Present Ma" : "Absent", "", [
					{
						text: "Ok",
						onPress: () => setCurrentStudent(() => currentStudent + 1),
					},
				])
			} else {
				Alert.alert("That's the last of them", "You will be redirected by home")
				navigation.navigate("Class")
			}
			setIsLoading(false)
		}, 1000)
	}

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.headerText}>
					{first_name} {last_name}
				</Text>
			</View>
			<View style={styles.pressable_group}>
				<Pressable
					style={[styles.pressable, styles.absent, isLoading && styles.loading]}
					onPress={() => markAttendance(false)}
					disabled={isLoading}>
					<Text>Absent</Text>
				</Pressable>
				<Pressable
					style={[
						styles.pressable,
						styles.present,
						isLoading && styles.loading,
					]}
					onPress={() => markAttendance(true)}
					disabled={isLoading}>
					<Text>Present</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	headerText: {
		fontSize: 36,
		marginBottom: 60,
		textAlign: "center",
	},
	pressable_group: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	pressable: {
		width: 150,
		height: 150,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
	},
	loading: {
		opacity: 0.5,
	},
	absent: {
		backgroundColor: "red",
	},
	present: {
		backgroundColor: "#8CFAC8",
	},
})
export default StudentScreen
