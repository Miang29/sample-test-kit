import * as React from "react";
import { View, Image } from "react-native";

export default function Header() {
    return(
      <View
      style={{
        height: 270,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          height: '100%',
          width: '100%',
          paddingBottom: '20%',
         
        
       
          }}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/new-user-registration-4489362-3723269.png'
          }} />
          </View>
    )
}