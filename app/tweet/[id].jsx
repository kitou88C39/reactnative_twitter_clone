import Tweet from '@/components/Tweet';
import tweets from '@/assets/data/tweets';
import { useSearchParams } from 'expo-router';

export default function TweetScreen() {
  const { id } = useSearchParams();
  console.warn(id);

  return <Tweet tweet={tweets[0]} />;
}
