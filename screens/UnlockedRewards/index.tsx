import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RedeemedList from '../RedeemedList';
import RewardsList from '../RewardsList';
import Eye from '../../assets/icons/Eye';
import EyeCut from '../../assets/icons/EyeCut';

const Tab = createBottomTabNavigator();

const UnlockedRewards: React.FC = () => (
  <Tab.Navigator screenOptions={{ tabBarItemStyle: { padding: 0 } }}>
    <Tab.Screen
      name="Unlocked"
      component={RedeemedList}
      options={{
        tabBarIcon: () => <Eye />,
        tabBarActiveBackgroundColor: '#E0E0E0',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Used"
      component={RewardsList}
      options={{
        tabBarIcon: () => <EyeCut />,
        tabBarActiveBackgroundColor: '#E0E0E0',
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default UnlockedRewards;
