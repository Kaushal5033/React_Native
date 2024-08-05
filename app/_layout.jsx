import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{slot,Stack} from "expo-router"

const Rootlayout = () => {
  return (
    <Stack>
        <Stack.Screen name = "index" options = {{headerShown:false}}/>
    </Stack>
  )
}

export default Rootlayout

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})