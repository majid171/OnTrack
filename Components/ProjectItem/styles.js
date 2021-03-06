import {StyleSheet, Dimensions} from 'react-native'

const colour1 = '#B22222'
const colour2 = '#FF7F50'
const colour3 = '#FFA500'
const colour4 = '#A6D785'
const colour5 = '#4CBB17'

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 10,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    title:{
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'roboto',
        color: 'black'
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
        borderColor: 'black',
        borderWidth: 2,
        right: 10,
    },

    percentArea2:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour2,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2,
        right: 10,
    },

    percentArea3:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour3,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2,
        right: 10,
    },

    percentArea4:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour4,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2,
        right: 10,
    },

    percentArea5:{
        width: '20%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colour5,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 2,
        right: 10,
    },

    percentText:{
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
    },
    
});

export default styles;