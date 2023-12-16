import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "./firebase";

const auth = getAuth(firebaseApp);

const signupUser = async (data) => {
  try {
    return await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
  } catch (error) {
    return error;
  }
};

const loginUser = async (data) => {
  try {
    return await signInWithEmailAndPassword(auth, data.email, data.password);
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  localStorage.clear();
  await auth.signOut();
};

const updateUser = async (data) => {
  return await updateProfile(auth.currentUser, data).catch((error) => {
    return error;
  });
};

export const authApi = {
  loginUser,
  signupUser,
  updateUser,
  logout,
  providerValue: auth.currentUser,
};
