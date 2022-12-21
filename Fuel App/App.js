import * as React from 'react';
import { Button, View, Text ,Image,TextInput,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center',  backgroundColor: 'rgb(144,225,164)', justifyContent: 'center' }}>
       <Image source={{
          width: 300,
          height: 250,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://img.favpng.com/7/1/13/biofuel-renewable-energy-fuel-gas-natural-gas-png-favpng-v63hn3h6jb40iKMHaZWWdiY9E.jpg",
         }}
         />
        <Text style={{fontSize:50,textAlign: 'center',margin: 10,color:'#ffffff',fontFamily: 'Georgia'}}>WELCOME</Text>
      <Text style={{fontSize:30,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily: 'Georgia'}}>SLgasApp</Text>
      <Text style={{fontSize:10,textAlign: 'center',margin: 5,color: '#ffffff',fontFamily: 'Georgia'}}> Best way to find your choice</Text>
      
      <Button  title="Get Start"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text style={{fontSize:12,textAlign: 'center',margin: 5,color: '#ffffff',fontFamily: 'Georgia'}}> If you already have an account?</Text>
      <Button 
        title="LogIn"
        onPress={() => navigation.navigate('LogIn')}
      />
      </View>
  );
}


function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
    <Text style={{fontSize:50,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily:'serif'}}>WELCOME</Text>
    <Text style={{fontSize:35,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily: 'serif'}}>SLgasApp</Text>
    <Text style={{fontSize:20,textAlign: 'left',margin: 10,color: '#ffffff',fontFamily:'serif'}}>SignUp Now</Text>
    <Text style={{fontSize:15,textAlign: 'left', color: '#ffffff',fontFamily:'serif'}}>Name</Text>
    <TextInput style={{height: 40,margin: 1,borderWidth: 1,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Text style={{fontSize:15,textAlign: 'left',margin: 1, color: '#ffffff',fontFamily:'serif'}}>Email Address </Text>    
    <TextInput style={{height: 40,alignItems: 'center',margin: 1,borderWidth: 1,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Text style={{fontSize:15,textAlign: 'left',margin: 1, color: '#ffffff',fontFamily:'serif'}}>Password</Text>
    <TextInput style={{height: 40,margin: 2,borderWidth: 1,marginBottom: 15,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Button title="SignUp" onPress={() => navigation.navigate('Dashboard')} />
    <Text style={{fontSize:15,textAlign: 'center',margin: 5,color: '#ffffff',fontFamily:'serif'}}>If you already have an account</Text>
    <Button title="Go to Login" onPress={() => navigation.navigate('LogIn')} />
    </View>
    
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
    <Text style={{fontSize:50,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily:'serif'}}>WELCOME</Text>
    <Text style={{fontSize:35,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily: 'serif'}}>SLgasApp</Text>
    <Text style={{fontSize:20,textAlign: 'left',margin: 5,color: '#ffffff',fontFamily:'serif'}}>LogIn Now</Text>
    <Text style={{fontSize:15,textAlign: 'left', color: '#ffffff',fontFamily:'serif'}}>User Name</Text>
    <TextInput style={{height: 40,margin: 1,borderWidth: 1,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Text style={{fontSize:15,textAlign: 'left',margin: 1, color: '#ffffff',fontFamily:'serif'}}>Password</Text>
    <TextInput style={{height: 40,margin: 2,borderWidth: 1,marginBottom: 15,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    
      <Button title="LogIn" onPress={() => navigation.navigate('Dashboard')} />
      <Text style={{fontSize:15,textAlign: 'center',margin: 5,color: '#ffffff',fontFamily:'serif'}}>If you forget your password</Text>
      <Button title="Go to reset password" onPress={() => navigation.navigate('Reset Password')} />
    </View>
  );
}
function PasswordResetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
     <Text style={{fontSize:40,textAlign: 'center',margin: 30,color: '#ffffff',fontFamily:'serif'}}>Reset Your Password</Text>
     <Text style={{fontSize:15,textAlign: 'left', color: '#ffffff',fontFamily:'serif'}}>User Name</Text>
    <TextInput style={{height: 40,margin: 1,borderWidth: 1,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Text style={{fontSize:15,textAlign: 'left',margin: 1, color: '#ffffff',fontFamily:'serif'}}>New Password </Text>    
    <TextInput style={{height: 40,alignItems: 'center',margin: 1,borderWidth: 1,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
    <Text style={{fontSize:15,textAlign: 'left',margin: 1, color: '#ffffff',fontFamily:'serif'}}>Confirtm Password</Text>
    <TextInput style={{height: 40,margin: 2,borderWidth: 1,marginBottom: 15,padding: 10,borderRadius: 10,borderColor:'black'}}
    />
      <Button title="Submit" onPress={() => navigation.navigate('Password Updated')} />
    </View>
  );
}
function UpdatedPassword({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center',backgroundColor: '#ffffff' }}>
     <Text style={{fontSize:40,textAlign: 'center',margin: 30,color: 'black',fontFamily:'serif'}}>Your Password Is Updated</Text>
    <Image source={{
          width: 300,
          height: 300,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmFqwrHR4g0HvJ-81OPpPzSeSFPtb4LUUpVN2MJjL2vb1JuzwD2yi4jUoLOjz3GZepqQ&usqp=CAU",
         }}
         />
      <Button color="#73ef71" title="LogIn" onPress={() => navigation.navigate('LogIn')} />
    </View>
  );
}


function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
      <Text style={{ fontSize:50,textAlign: 'center',margin: 10,color: '#ffffff',fontFamily: 'serif'}}>SLgasApp</Text>
     
    <View style={{ flex: 1,padding:10,borderRadius:20, paddingBottom:30, justifyContent: 'flex-end' }}>
    <Image source={{
          width: 150,
          height: 150,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://www.shareicon.net/data/256x256/2016/06/10/586220_gas_512x512.png",
         }}
         />
    <Button color="#2e8b57" title="LP Gas" onPress={() =>navigation.navigate('LP Gas')}/>
    </View>
    <View style={{ flex: 1,padding:10,borderRadius:50, paddingBottom:30, justifyContent: 'flex-end' }}>
    <Image source={{
          width: 150,
          height: 150,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png",
         }}
         />
    <Button color="#2e8b57" title="Live Queue Map" onPress={() =>navigation.navigate('Live Queue Map')}/>
    </View>
    </View>
  );
}
function LPGas({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
    <View style={{ flex: 1,padding:10,width :400,borderRadius:50,  justifyContent: 'flex-end' }}>
    <Button color="#123524" title="Litro" />
    <Text style={{fontSize:22,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>Weight</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>5Kg</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>12.5Kg</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>37.5Kg</Text>
    <View style={{ flex: 1,alignItems: 'center',padding:0,width :100 }}>
    <Image source={{
          width: 30,
          height: 30,
         
          padding: 50,
          alignItems: 'center',
          uri:"https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png",
         }}
         />
    
    <Button color="#2e8b57" title="nearest station" onPress={() =>navigation.navigate('Live Queue Map')}/>
    </View>
    </View>
    <View style={{ flex: 1,padding:10,width :400,borderRadius:150,  justifyContent: 'flex-end' }}>
    <Button color="#123524" title="Lauhfs" />
    <Text style={{fontSize:22,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>Weight</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>5Kg</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>12.5Kg</Text>
    <Text style={{fontSize:18,textAlign: 'left',margin: 5,color: 'black',fontFamily:'serif'}}>37.5Kg</Text>
    <View style={{ flex: 1,alignItems: 'center',padding:0,width :100 }}>
    <Image source={{
          width: 30,
          height: 30,
         
          padding: 50,
          alignItems: 'center',
          uri:"https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png",
         }}
         />
    
    <Button color="#2e8b57" title="nearest station" onPress={() =>navigation.navigate('Live Queue Map')}/>
    </View>
    
    </View>
        <Button color="#2e8b57" title="Back to Dashboard" onPress={() =>navigation.navigate('Dashboard')}/>
   </View>
  );
}
function LiveQueueMap({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgb(144,225,164)' }}>
    <Image source={{
          width: 400,
          height:450,
          marginBottom: 70,
          padding: 50,
          alignItems: 'center',
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq09hCbQXYwIr0T9agdahZzro57D1nZfHspP-GGxE5hm0HlW9WWfKQm3U3X3bKlp7Lgw&usqp=CAU",
         }}
         />
    
      <Button color="#2e8b57" title="Back to Dashboard" onPress={() =>navigation.navigate('Dashboard')}/>
    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Reset Password" component={PasswordResetScreen} />
        <Stack.Screen name="Password Updated" component={UpdatedPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LP Gas" component={LPGas} />
        <Stack.Screen name="Live Queue Map" component={LiveQueueMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}