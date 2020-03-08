import * as React               from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gallery from '../screens/Gallery';
import Photo   from '../screens/Photo';

const Stack = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Gallery'>
				<Stack.Screen
					name='Gallery'
					component={Gallery}
				/>
				<Stack.Screen name='Photo' component={Photo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
