import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TextInput
        style={styles.input}
        placeholder="タスクを入力"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',     // 横中央
    justifyContent: 'center', // 縦中央
    backgroundColor: 'cyan',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 3,
    borderColor: '#FFC107',  // ★ アンバー色
    backgroundColor: 'white',
    borderRadius: 6,
  },
});
