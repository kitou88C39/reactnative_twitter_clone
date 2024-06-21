import { Text, View, Image, StyleSheet } from 'react-native';
import { TweetType } from '@/type';
import { Entypo } from '@expo/vector-icons';

type TweetProps = {
  tweet: TweetType;
};
const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username}・2h</Text>
          <Entypo
            name='dots-three-horizontal'
            size={16}
            color='black'
            style={{ marginLeft: 'auto' }}
          />
        </View>
        {tweet.image && <Image src={tweet.image} style={styles.image} />}
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
  },
});

export default Tweet;
