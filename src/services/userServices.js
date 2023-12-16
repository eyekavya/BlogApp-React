import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import firebaseApp from "./firebase";
import { fireStoreCollections } from "../utils/constants/app_constants";
import { fetchWrapper } from "../utils/fetchWrapper";

const db = getFirestore(firebaseApp);

const addUser = async (uid, data) => {
  const docRef = doc(db, fireStoreCollections.users, uid);
  await setDoc(docRef, data);
};

const getUser = async (uid) => {
  const docRef = doc(db, fireStoreCollections.users, uid);
  const data = await getDoc(docRef);

  return data.data();
};

const updateUser = async (uid, data) => {
  const docRef = doc(db, fireStoreCollections.users, uid);

  return await updateDoc(docRef, data);
};

const getUid = async (body) => {
  return await fetchWrapper.post("/api/auth/getUid", body);
};

export const userServices = {
  addUser,
  getUser,
  updateUser,
  getUid,
};
