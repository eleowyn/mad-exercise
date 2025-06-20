import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Homee from './src/pages/Homee';

const App = () => {
  return (
    <Homee/>
  );
};

export default App;








// import React from 'react';
// import {View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';

// //Komponen adalah fungsi yg mengembalikan JSX
// const App = () => {
//   return (
//     //JSX
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={style.container}>
//         <Text style={style.text}>Hello World</Text>
//       </View>
//       <Image style={style.img2} source={require('./assets/download.jpg')}/>
//       <Image
//         style={style.img3}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <Image
//         style={style.logo}
//         source={{
//           uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//         }}
//       />
//       <TextInput 
//       style={style.input}
//       placeholder="masukan nama anda"/>

//       <TouchableOpacity style={style.button} activeOpacity={0.5}>
//         <Text style={style.buttonText}>submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default App;

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: 'black',
//   },
//   text: {
//     fontSize: 30,
//     textAlign: 'center',
//     color: 'yellow',
//   },
//   img2 : {
//     height: 500,
//     width: 500,

//   },
//   img3 : {
//     height: 200,
//     width: 200,

//   },
//   logo : {
//     height: 200,
//     width: 200,

//   },
//   input: {
//     borderWidth: 2,
//     borderColor:"black",
//     fontSize: 25,
//     padding: 20,
//     margin: 20,
//     borderRadius: 30,
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 30,
//     borderRadius: 20,
//     margin: 20
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 25,
//   }
// });