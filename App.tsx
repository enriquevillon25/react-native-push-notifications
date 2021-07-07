/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import { PushNotificationIOS } from '@react-native-community/push-notification-ios';
 import firebase from './src/utils/firebase';
 import messaging from '@react-native-firebase/messaging';
 import auth from '@react-native-firebase/auth'; 
 import firestore from '@react-native-firebase/firestore';
 import Firebase from '@react-native-firebase/app';
 import { Alert, Platform } from 'react-native';
 import React,{useEffect, useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
 import PushNotification from "react-native-push-notification";

 


 const App = ()  => {
   const isDarkMode = useColorScheme() === 'dark';
   const [notification, setNotification] = useState({
    title: '',
    body: '',
    image: '',
  });
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   const getToken = async () =>{
    const token = await messaging().getToken();
    console.log(token)
  }

   useEffect(() => {
    firebase;

    getToken();
    // messaging().onMessage(async remoteMessage => {
    //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //   setNotification({
    //     title: 'ghdfhdf',
    //     body:'sdgsdgs',
    //     image: '',
    //   });
    // });

    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log('onNotificationOpenedApp: ', JSON.stringify(remoteMessage));
    //   setNotification({
    //     title: remoteMessage.notification.title,
    //     body: remoteMessage.notification.body,
    //     image: remoteMessage.notification.android.imageUrl,
    //   });
    // });

    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         JSON.stringify(remoteMessage),
    //       );
    //       setNotification({
    //         title: remoteMessage.notification.title,
    //         body: remoteMessage.notification.body,
    //         image: remoteMessage.notification.android.imageUrl,
    //       });
    //     }
    //   });
    
    //  const forengroundSubscriber = messaging().onMessage(async(remoteMessage)=>{
    //   console.log('push',remoteMessage)
    //  })

    //  const topicSubscriber = messaging().subscribeToTopic('juanortiz').then(()=>
    //    console.log('SUBSCRITO AL TOPICO')
    //  )

    //  const backgrundSubscriber = messaging().setBackgroundMessageHandler(
    //    async(remoteMessage)=>{
    //      console.log(remoteMessage);
    //    },
    //  );
    //  return ()=>{
    //   forengroundSubscriber();
    //   topicSubscriber();
    //   backgrundSubscriber();
    //  };
      PushNotification.configure({
        onRegister: function(token:any){
          console.log("token", token)
        },
        onNotification: function(notificacion:any){
          console.log('notifiacion',notificacion);
          // Alert.alert(notification.title);
        }
        
      })
      messaging()
      .getToken()
      .then(token => {
        // return saveTokenToDatabase(token);
        console.log(token)
        messaging().hasPermission();
      });

      messaging().setBackgroundMessageHandler( async response =>{
        console.log(response)
      })

      messaging().onNotificationOpenedApp(async response =>{
        console.log(response)
      })
      
      // messaging().subscribeToTopic('hola').then(()=> console.log('subs'))
      // const mess = messaging().setBackgroundMessageHandler(async (remoteMessage)=>{
      //   console.log('remote',remoteMessage);
      // })
     
      // PushNotification.configure({
      //   onRegister: function (token:any){
      //     console.log(token)
      //   },
      //   onNotification: function (notification:any){
      //     console.log('notifiacion',notification);
      //     // const {
      //     //   notifications: {
      //     //     Android: {
      //     //       Priority: { Max }
      //     //     }
      //     //   }
      //     // } = firebase;
      //     // notification.android.setChannelId(CHANNEL_NOTIFICATIONS.CHANNEL_ID);
      //     // notification.android.setPriority();
      //     // notification.setData(notification.data);
      //     Alert.alert(notification.title);
      //   }
      // })
      // return ()=>{
      //   mess;
      // }
   }, [])

   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
             
           {/* <Section title="Step One">
             Edit <Text style={styles.highlight}>App.js</Text> to change this
             screen and then come back to see your edits.
           </Section>
           <Section title="See Your Changes">
             <ReloadInstructions />
           </Section>
           <Section title="Debug">
             <DebugInstructions />
           </Section>
           <Section title="Learn More">
             Read the docs to discover what to do next:
           </Section>
           <LearnMoreLinks /> */}
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };


 export default App;
