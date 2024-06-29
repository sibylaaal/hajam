import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
        <View className='flex-1 justify-center items-center'>
        <Text>
          hi
        </Text>
        <Link href={'home'}>home</Link>
      </View>
    </>
  );
}
