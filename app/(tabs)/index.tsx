import { StyleSheet, Image } from 'react-native';

import { Text, View } from '@/components/Themed';
import tweets from '@/assets/data/tweets';
const tweet = tweets[0];
import Tweet from '@/components/Tweets';

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
