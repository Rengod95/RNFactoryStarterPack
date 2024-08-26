import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarVisibilityAnimationConfig: {show: {animation: 'timing'}},
        headerShown: false,
        headerStyle: {
          backgroundColor: DefaultColors.background.primary,
          borderColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      tabBar={props => <CustomBottomTabBar {...props} />}
    />
  );
};
