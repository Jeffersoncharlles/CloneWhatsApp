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
                    id: result.id,
                    name: result.data().name,
                    avatarUrl: result.data().avatarUrl
                })
            }
        })
        return list
    },
    createNewChat: async (user: any, contact: any) => {
        const newChat = await db.collection('chats').add({
            messages: [],
            users: [user.id, contact.id]
        });
        db.collection('users').doc(user.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: contact.name,
                image: contact.avatarUrl,
                with: contact.id
            })//add oque eu colocar em um array que ja existe
        })
        db.collection('users').doc(contact.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatarUrl,
                with: user.id
            })//add oque eu colocar em um array que ja existe
        })
    },
    onChatList: async (userId: string, setChatList: any) => {
        let list: any = []
        db.collection('users').doc(userId).onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data()
                if (data?.chats) {
                    setChatList(data?.chats)
                }
            }
        })
    },
    onChatContent: async (chatId: string, setMessageList: any, setUsers: any) => {
        let list: any = []
        db.collection('chats').doc(chatId).onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data()
                if (data?.messages) {
                    setMessageList(data?.messages)
                    setUsers(data?.users)
                }
            }
        })
    },
    sendMessage: async (chatData: any, userId: string, type: string, body: any, users: any) => {
        db.collection('chats').doc(chatData.chatId).update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                type,
                author: userId,
                body,
                date: new Date()
            })
        })

        for (let i in users) {
            const user = await db.collection('users').doc(users[i]).get()
            if (user.data()) {
                let chats = [...user.data()?.chats] //clonando chat
                for (let e in chats) {
                    //atualizando as informações no chat nos usuários
                    if (chats[e].chatId === chatData.chatId) {
                        chats[e].lastMessage = body;
                        chats[e].lastMessageDate = new Date();
                    }
                }
                await db.collection('users').doc(users[i]).update({
                    chats
                });
            }
        }
    }
}