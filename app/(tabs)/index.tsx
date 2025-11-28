import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Hello World React Native</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // 横中央
    justifyContent: 'center', // 縦中央
    backgroundColor:'cyan',//cyan色
  },
  title: {
    color:'pink',//rose色
    fontSize: 50,
    fontWeight: '800',
  }
});
