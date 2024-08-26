// import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
// import {Button, View} from 'react-native';

// export const CustomBottomTabBar = ({navigation, state, descriptors}: BottomTabBarProps) => {
//   return (
//     <View
//       style={{
//         borderTopWidth: 0.5,
//         borderTopColor: DefaultColors.background.tertiary,
//         backgroundColor: DefaultColors.background.primary,
//         flexDirection: 'row',
//       }}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label = typeof options.tabBarLabel === 'string' ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
//
//         if (label === 'WebView') {
//           return null;
//         }
//
//         const isFocused = state.index === index;
//
//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });
//
//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name, route.params);
//           }
//         };
//
//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//
//         return <Button key={label} onPress={onPress} style={{flex: 1, height: 60, backgroundColor: DefaultColors.background.primary}} />;
//       })}
//     </View>
//   );
// };
