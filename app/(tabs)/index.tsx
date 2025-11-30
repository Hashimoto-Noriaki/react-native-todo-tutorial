import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TextInput style={styles.input} placeholder="タスクを入力" />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText} onPress={()=> {}}>追加</Text>
      </TouchableOpacity>
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
    borderColor: '#FFC107',  // アンバー色
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor:'#FFC107',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 100,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'
  },
});
