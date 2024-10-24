"use server"
import { db } from "./page";

export async function upVote(movieId:number) {
  await db.movieVotes.upVote(movieId);
}
