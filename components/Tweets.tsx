import { Text, View } from '@/Themed';

const Tweet = () => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};
