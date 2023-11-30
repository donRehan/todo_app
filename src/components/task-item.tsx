import React , { useCallback } from 'react';
import { Pressable } from 'react-native';
import { Box , useTheme , themeTools , useColorModeValue } from 'native-base';
//Main difference between my implementation and @devaslife implementation thusfar
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
	isDone: boolean;
	onToggleCheckbox?: () => void;
}

const TaskItem = (props: Props) => {
	const  theme  = useTheme();
	
	// These will be disregarded as its for his version not mine vv
	const  highlightColor  = themeTools.getColor(
	theme, useColorModeValue('blue.500', 'blue.400')
	);
	//May not need this part either !
	const { isDone , onToggleCheckbox } = props;
	const  boxStroke  = themeTools.getColor(
	theme, useColorModeValue('muted.300', 'muted.500')
	);
	const  checkmarkColor  = themeTools.getColor(
	theme, useColorModeValue('white', 'white')
	);
	//these ^^

	const  activeTextColor  = themeTools.getColor(
	theme, useColorModeValue('darkText', 'lightText')
	);
	const  doneTextColor  = themeTools.getColor(
	theme, useColorModeValue('muted.400', 'muted.500')
	);

	return (
		<Box width={30} height={30} mr={2}>
		<BouncyCheckbox onPress={(isChecked: boolean) => {}} />
		</Box>
	)
}

export default TaskItem;
