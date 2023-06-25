import React, { useEffect, useState } from "react"
import { View, Text, Pressable, Alert } from "react-native"
import students from "./data.json"
import { useNavigation, useRoute } from "@react-navigation/native"

const StudentScreen = () => {
	const [studentsInClass, setStudentsInClass] = useState([])
	const [currentStudent, setCurrentStudent] = useState(0)
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

	const markAttendance = async isPresent => {
		await Alert.alert(isPresent ? "Present Ma" : "Absent")
		if (currentStudent < studentsInClass.length) {
			setCurrentStudent(() => currentStudent + 1)
		}
	}

	return (
		<View>
			<View>
				<Text>
					{first_name} {last_name}
				</Text>
			</View>
			<View>
				<Pressable onPress={() => markAttendance(false)}>
					<Text>Absent</Text>
				</Pressable>
				<Pressable onPress={() => markAttendance(true)}>
					<Text>Present</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default StudentScreen
