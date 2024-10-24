//#region app
"use client"
import { upVote } from "./actions";

async function MovieDetails(props: {movie: {title: string}, movieId: number }) {
  return (
    <>
      <h1>{props.movie.title}</h1>
      {/* {$$typeof: Symbol.for("react.server.reference"), $$id: 'upVote'} */}
      <button onClick={() => upVote(props.movieId)}>Up!</button>
    </>
  );
}
//#endregion app