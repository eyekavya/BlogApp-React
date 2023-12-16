/* eslint-disable no-console */
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import storage from "../storage";

async function uploadToFirebase(
  file,
  fileName,
  folder = "profile",
  contentType = "image/jpeg"
) {
  const metadata = {
    contentType: contentType,
  };

  // Upload file and metadata to the object 'images/test.jpg'
  const storageRef = ref(storage, `/${folder}/${fileName}`);
  const uploadTask = await uploadBytesResumable(storageRef, file, metadata);

  // Upload completed successfully, now we can get the download URL
  return await getDownloadURL(uploadTask.ref).then((downloadURL) => {
    return downloadURL;
  });
}

async function deleteFromFirebase(folder = "profile", fileName) {
  const fileRef = ref(storage, `/${folder}/${fileName}`);

  try {
    await deleteObject(fileRef);
    return { success: true };
  } catch (error) {
    return error;
  }
}

async function getFileDownloadURL(folder = "profile", fileName) {
  const fileRef = ref(storage, `/${folder}/${fileName}`);
  try {
    return await getDownloadURL(fileRef).then((res) => {
      return res;
    });
  } catch (error) {
    return true;
  }
}

export const storageServices = {
  uploadToFirebase,
  deleteFromFirebase,
  getFileDownloadURL,
};
