import React from 'react';
import { OnboardFlow } from 'react-native-onboard';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <OnboardFlow
    primaryColor='#1faf73'
      pages={[
        {
          title: 'Welcome to Hajam',
          subtitle: 'For the pages in the pages array, you can set the default styles and override the styles set by this component ',
          imageUri: 'https://img.freepik.com/free-vector/partnership-concept-illustration_114360-5994.jpg?t=st=1720368124~exp=1720371724~hmac=e54012ebb20e7785ec19407499b6eda77dbb80fd32ce9b994f60a4a6102ecabe&w=740',
        },
        {
          title: 'Save your time',
          subtitle: 'For the pages in the pages array, you can set the default styles and override the styles set by this component page 2',
          imageUri: 'https://img.freepik.com/free-vector/barbershop-team-concept-illustration_114360-10772.jpg?t=st=1720367861~exp=1720371461~hmac=150b8b977c0bfc658c9d9b4904cbe8184d6468706b483d447a48de4bb0d788a8&w=740',
        }
      ]}
      textStyle={{ fontFamily: 'Poppins' }}
      titleStyle={{ fontFamily: 'Poppins' }}
      subtitleStyle={{color:'#808080',fontWeight:'400'}}
      paginationSelectedColor='#1faf73'
      primaryButtonStyle={{backgroundColor:'#1faf73'}}
      type={'fullscreen'}
      onDone={() => router.replace('/sign-in')}
    />
  );
}
