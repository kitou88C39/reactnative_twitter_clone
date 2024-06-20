import { StyleSheet, Image } from 'react-native';

import { Text, View } from '@/components/Themed';
import tweets from '@/assets/data/tweets';

const tweet = tweets[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <Text>{tweet.user.name}</Text>
      <Text>{tweet.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  userImage: {},
});
