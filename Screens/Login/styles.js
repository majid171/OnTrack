import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#4682B4',
        height: Dimensions.get('window').height,
        alignItems: "center",
        width: '100%',
    },
    
    BottomContainer:{
        width: '100%',
        backgroundColor: '#FFF',
        bottom: 0,
        top: '15%',
        height: '100%',
    },

    titleArea:{
        paddingTop: 50,
        width: Dimensions.get('window').width,
    },

    title:{
        fontSize: 100,
        fontFamily: 'billabong',
        color: '#fff',
        textAlign: 'center',
    },

    button:{
       padding: 20,
       justifyContent: 'center',
    },
    
    loginView:{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText:{
       color: '#1DA1F2',
       textAlign: 'center',
       fontSize: 18,
    },

});

export default styles;