import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },
    incidentValue: {
        marginTop: 8,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})