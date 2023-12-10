import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from 'config/firebase'
import { getImage } from "helpers/getImage";



export const getReviews = createAsyncThunk('reviews/fetchReviews', async (_,) => {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    let reviewsList: any = []
  
    for (const doc of querySnapshot.docs) {
      const avatar = await getImage(`reviews/${doc.data().name}.jpg`)
      const result = doc.data()
      const reviewsItem = {...result, avatar}
  
      reviewsList.push(reviewsItem)
    };
  
    return reviewsList
  })