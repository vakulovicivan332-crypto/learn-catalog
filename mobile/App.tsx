import { StyleSheet, View } from 'react-native';
import ResourceCard from './src/components/ResourceCard';
import type { Resource } from './src/types';

const resource: Resource = {
  id: 1,
  title: 'Функції',
  minutes: 25,
};

export default function App() {
  return (
    <View style={styles.container}>
      <ResourceCard resource={resource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});