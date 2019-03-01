import {StyleSheet, Dimensions} from 'react-native'

const colour1 = '#FF0000'
const colour2 = '#FFA500'
const colour3 = '#90EE90'
const colour4 = '#7CFC00'

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        //top: 20,
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 10,
        backgroundColor: 'white',
        borderColor: 'black',
        //borderRadius: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
    },

    title:{
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'roboto',
    },

    nameArea:{
        alignItems: 'flex-start',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 15
    },

    percentArea1:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour1,
        borderRadius: 40,

    },

    percentArea2:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour2,
        borderRadius: 40,

    },

    percentArea3:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour3,
        borderRadius: 40,

    },

    percentArea4:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour4,
        borderRadius: 40,
    },

    percentText:{
        fontSize: 20,
        color: 'black',
    },
    
});

export default styles;