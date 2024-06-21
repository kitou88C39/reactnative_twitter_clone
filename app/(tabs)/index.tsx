import { StyleSheet } from 'react-native';
import Tweet from '@/components/Tweets';
import tweets from '@/assets/data/tweets';
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <>
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
}

const styles = StyleSheet.create({});
