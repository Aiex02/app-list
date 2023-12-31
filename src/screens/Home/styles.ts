import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#5636D3',
      padding: 40,
    },
  
    eventName: {
      color: '#FDFCFE',
      fontSize: 26,
      marginTop:48,
      fontWeight: 'bold',
    },
  
    eventDate: {
      fontSize: 16,
      color: '#FFFFFF',
    },

    input : {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      marginRight: 4,
    },

    buttonText: {
      color : '#FFF',
      fontSize: 24,
    },

    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      justifyContent: 'center',
      alignItems: 'center',
    },

    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    }
  })