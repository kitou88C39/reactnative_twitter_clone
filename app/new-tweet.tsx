import { View, StyleSheet, Text } from 'react-native';

const user = {
  id: 'u1',
  username: 'VadimNotJustDev',
  name: 'Vadim',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
};

export default function NewTweet() {
  return (
    <View>
      <Image />
      <Text>Create new tweet</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
