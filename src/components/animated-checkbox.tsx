import React, { useEffect, memo } from 'react'
import Animated, {
Easing, useSharedValue, useAnimatedProps, withTiming, interpolateColor
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN

//THIS FILE IS USELESS AND CAN BE DELETED , FOR NOW ITS JUST FOR REFRENECE
