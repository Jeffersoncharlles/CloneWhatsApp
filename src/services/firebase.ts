import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBtgov_B97zV2vjTyxHcqaJej7Pd4QNRIY",
    authDomain: "whatsappclonereact-40bb6.firebaseapp.com",
    projectId: "whatsappclonereact-40bb6",
    storageBucket: "whatsappclonereact-40bb6.appspot.com",
    messagingSenderId: "130611734354",
    appId: "1:130611734354:web:5ce35ce323280563ca3c8b",
    measurementId: "G-46G6GE6XS0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        const result = await firebaseApp.auth().signInWithPopup(provider)
        return result
    },
    createUser: async (user: any) => {
        await db.collection('users').doc(user.id).set({
            name: user.name,
            avatarUrl: user.avatarUrl
        }, { merge: true });//merge serve para atualizar se ele achar algum
    },
    fullContactList: async (userId: string) => {
        let list: any = [];

        const results = await db.collection('users').get();
        results.forEach((result) => {
            if (result.id !== userId) {
                list.push({
                    userId: result.id,
                    name: result.data().name,
                    avatarUrl: result.data().avatarUrl
                })
            }
        })
        return list
    }
}