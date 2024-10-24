export default function Page() {
  return <MovieDetails movieId={1} />
}

//#region app
async function MovieDetails(props: { movieId: number }) {
  const movie = await db.movies.find(props.movieId);

  async function upVote() {
    'use server';
    await db.movieVotes.upVote(props.movieId);
  }

  return <>
    <h1>{movie.title}</h1>
    <form action={upVote} method="POST">
      <button type="submit">Up!</button>
    </form>
  </>;
}
//#endregion app


export const db = {
  movies: {
    find: async (id: number) => {
      return { title: 'The Lord of the Rings' };
    }
  },
  movieVotes: {
    upVote: async (id: number) => {
      return { ok: 'ok' }
    }
  }
}