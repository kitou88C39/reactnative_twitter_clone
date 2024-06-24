import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import Tweet from '@/components/Tweet';
import tweets from '@/assets/data/tweets';
import { Entypo } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable style={styles.floatingButton}>
        <Entypo name='plus' size={24} color='blacl' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    // ここに floatingButton のスタイルを定義します
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 10,
  },
});
