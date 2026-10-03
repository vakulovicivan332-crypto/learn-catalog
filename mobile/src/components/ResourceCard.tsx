import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  function handlePress() {
    console.log('Натискання перевірено');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.resource.title}</Text>
      <Text style={styles.meta}>{props.resource.minutes} хв</Text>
      <Pressable
        onPress={handlePress}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Перевірити кнопку</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  meta: {
    fontSize: 16,
    color: '#4B5563',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 12,
    minHeight: 48,
    marginTop: 12,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});