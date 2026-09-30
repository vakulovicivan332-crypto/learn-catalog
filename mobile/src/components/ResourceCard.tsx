import { Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <View>
      <Text>{props.resource.title}</Text>
      <Text>{props.resource.minutes} хв</Text>
    </View>
  );
}