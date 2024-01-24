import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  doc,
  getDocs,
  getFirestore,
  collection,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBTNHSqByXSG043pIBRdNEqOmUd7t7GJsA",
  authDomain: "netflix-clone-3d353.firebaseapp.com",
  projectId: "netflix-clone-3d353",
  storageBucket: "netflix-clone-3d353.appspot.com",
  messagingSenderId: "939678791650",
  appId: "1:939678791650:web:3338f60e75352e5c046bbb",
  measurementId: "G-SQERJ29H2B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "movies"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
//   console.log(doc.data());
// });

export const getMovieDetails = async (id) => {
  const docRef = doc(db, "movies", id);
  const docSnapshot = await getDoc(docRef);

  return docSnapshot.data();
};

// retriving document - test ✅
// const movieDocumentRef = doc(db, "movies", "1QXjtpKOYi81wNp5PRBH");
// console.log(movieDocumentRef);

const createDocument = (collectionName, document) => {
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
};
// try {
//   const doc = {
//     name: "Game of Thrones",
//     img: "https://thedrawshop.com/wp-content/uploads/2013/08/game-of-thrones-season-4.jpg",
//     rating: "9.8",
//     description:
//       "Game of Thrones is an epic fantasy television series based on George R.R. Martin's 'A Song of Ice and Fire' novels. Set in the fictional continents of Westeros and Essos, the series unfolds against a backdrop of political intrigue, power struggles, and supernatural elements. The narrative weaves together the stories of noble houses vying for the Iron Throne, the ultimate seat of power in Westeros. Focused on complex characters such as the Starks, Lannisters, Targaryens, and more, the series explores themes of loyalty, betrayal, honor, and the consequences of wielding power.Notorious for its willingness to kill off major characters, 'Game of Thrones' keeps viewers on edge with unexpected twists and turns. The series incorporates elements of magic, dragons, and the impending threat of the White Walkers, adding a fantastical dimension to its gritty political drama. The show gained widespread acclaim for its production values, intricate storytelling, and complex characters, though the later seasons sparked debates among fans over pacing and plot choices. 'Game of Thrones' stands as a cultural phenomenon, leaving an indelible mark on the television landscape and solidifying its place as one of the most talked-about and influential series of its time.",
//   };
//   createDocument("movies", doc);
// } catch (e) {
//   console.error("Error Adding document", e);
// }

// //? function for reading data from firebase
// const getMovieData = (docRef) => {
//   try {
//     const movieDocumentRef = doc(db, "movies", docRef);
//     return movieDocumentRef.data();
//   } catch (error) {
//     console.log("error in reading data : ", error);
//   }
// };

// console.log(await getMovieData("1ytJ7cPDcydWRNfemp0J"));
