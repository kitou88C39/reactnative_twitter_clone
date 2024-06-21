import { StyleSheet, View } from 'react-native';
import Tweet from '@/components/Tweets';
import tweets from '@/assets/data/tweets';
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <Tweet />
      <Tweet />
      <Tweet />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
});
