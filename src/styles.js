import { StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTitle:{
        fontSize:36,
        fontWeight: 'bold',
        color: "#30687A",
        margin:10,
        width: 150,
        height: 150,
        padding: 10
    },
    formInput:{
        borderColor: '#30687A',
        borderWidth:1,
        borderRadius:10,
        fontSize:10,
        width: "80%",
        padding:10,
        margin:10
    },
    formButton:{
        backgroundColor: "#30687A",
        width: "80%",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    textButton:{
        color:"#FFF",
        fontSize: 20,
        fontWeight: "bold"
    }, 
    subContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        width: "80%"
    },
    subButton: {
        padding: 10
    },
    subTextButton:{
        color: "#30687A"
    },
    //Telas internas
    internalContainer:{
        flex: 1,
        alignItems: "flex-start",
        paddingTop: 25
    }, 
    topBar:{
        flexDirection:"row-reverse",
        padding:10,
        backgroundColor:"#30687A",
        width: "100%",
        justifyContent: "space-between"
    },
    topBarButtonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    }
  });

export default styles