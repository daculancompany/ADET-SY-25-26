//@ts-nocheck

import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Name(props) {

  let color = props.color
  if(!props.color){
    color="red";
  }
    return (
        <View>
            <Text style={{ color: color}}>Name : {props.name}</Text>
            <Text style={{ color: "blue" }}>Address : {props.address} </Text>
            <Text>----------------------</Text>
        </View>
    );
}
