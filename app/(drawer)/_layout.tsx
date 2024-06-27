import { withLayoutContext } from 'expo-router';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function Drawerlayout() {
  return (
    <Drawer>
      <Drawer.Screen name='(tabs)' options={{ headerShown: false }} />
    </Drawer>
  );
}
