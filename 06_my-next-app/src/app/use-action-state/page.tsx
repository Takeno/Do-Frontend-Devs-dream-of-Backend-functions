//#region app
"use client"
import { useActionState } from "react";
import { voteUpServerSide } from "./api";

export default function Page() {
  const [votes, action, isPending] = useActionState(voteUpServerSide, 20);

  return (
    <div>
      <h1>Movie details</h1>
      <p>Total votes: {votes}</p>
      <form action={action}>
        <button disabled={isPending}>Vote up!</button>
      </form>
    </div>
  );
}
//#endregion app

// export default function Page() {
//   const [votes, setVotes] = useState(0);

//   const voteUp = useCallback(async () => {
//     const newVotes = await voteUpServerSide();
//     setVotes(newVotes);
//   }, []);

//   return (
//     <div>
//       <h1>Movie details</h1>
//       <p>Total votes: {votes}</p>
//       <button onClick={voteUp}>Vote up!</button>
//     </div>
//   );
// }