import {Text, View } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {Link} from 'expo-router'
import React from 'react'

export default function App () {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl">Cult</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'red'}}>Go to Profile</Link>
    </View>
  );
}
