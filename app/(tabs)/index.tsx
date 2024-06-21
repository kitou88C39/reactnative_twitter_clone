import { StyleSheet, View } from 'react-native';
import Tweet from '@/components/Tweets';
import tweets from '@/assets/data/tweets';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <Tweet tweet={tweets[0]} />
      <Tweet tweet={tweets[1]} />
      <Tweet tweet={tweets[2]} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
