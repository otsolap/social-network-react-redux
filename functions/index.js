const functions = require('firebase-functions');
const admin = require('firebase-admin')
// näin Adminit saavat uniikkeja ominaisuuksia itselleen.
admin.initializeApp(functions.config().firebase);

// Tämä notificaatio luo meille notifkaatiot, oli kyseessä sitten reg tai newposts.
// olemme luoneet collection notifications setin tätä varten.
// haluamme vain tämän funktion luoda notificaatiot ja thats it.
// PostsCreated ja NewUser itse verkkoselain version.
const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
});

// trigger on firestoresta löydetty uusidata.
// esim tuossa hellowroldissa, trigger on pelkästään http requesti.
// posts kokoelmasta oteraan uusi postID ja AINAKUN uusi (eli oncrease) triggeröityy
// niin myös MEIDÄN applikaatio triggeröityy.
// time: serveristä otetaan timestamppi, niin saadaan realiaikainen aika.
exports.postsCreated = functions.firestore
    .document('/posts/{postId}')
    .onCreate(doc => {
        const post = doc.data();
        const notification = {
            content: 'Made a new post!',
            user: `${post.authorUserName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })

// Auth servicellä käyttäjä rekisteröityy
// mutta Firestore luo UID jota sovellamme tässä funktiossa.
// muista, että firestore() on FUNKTIO ja tarvitsee (), se ei ole PROPERTY.
exports.newUser = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: "has entered the Lion's den",
                    user: `${newUser.username}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })
    })