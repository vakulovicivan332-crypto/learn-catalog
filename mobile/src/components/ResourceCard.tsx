import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleToggle() {
    setIsFavorite(previous => !previous);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.resource.title}</Text>
      <Text style={styles.meta}>{props.resource.minutes} хв</Text>
      <Text style={isFavorite ? styles.statusOn : styles.statusOff}>
        {isFavorite ? 'В обраному' : 'Не в обраному'}
      </Text>
      <Pressable
        onPress={handleToggle}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}
        </Text>
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
  statusOff: {
    fontSize: 16,
    color: '#4B5563',
    marginTop: 8,
  },
  statusOn: {
    fontSize: 16,
    fontWeight: '700',
    color: '#166534',
    marginTop: 8,
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