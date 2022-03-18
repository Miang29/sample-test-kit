import * as React from "react";
import { View, Image } from "react-native";

export default function Header() {
    return(
        <View
          style={{
              flex: 1,
              backgroundColor: '#ffffff',
              marginBottom: 10,
              overflow: 'visible'
          }}
        >
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'center'
            }}
            source={require('../../assets/images/68312-login.gif')}
          />
          </View>
    )
}