import * as React from 'react'
import { Text,Box, Center, VStack,
useColorModeValue , HStack } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TaskItem from "../components/task-item";

export default function MainScreen() {

	const [checked, setChecked] = React.useState(false);
	const handlePressCheckBox = React.useCallback(() => {
	setChecked(prev => !prev);
	}, []);

	return (
		<Center _dark= {{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
			<VStack space={5} alignItems="center">
				<Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
					{/* May return this to false Since his implementation may be different than mine's*/}
					<TaskItem isDone={checked} onToggleCheckbox={handlePressCheckBox}/>
				</Box>
				<Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
					<Text>Hello</Text>
				</Box>
				<BouncyCheckbox onPress={(isChecked: boolean) => {}} />
				<ThemeToggle />
			</VStack>
		</Center>
	)
}
