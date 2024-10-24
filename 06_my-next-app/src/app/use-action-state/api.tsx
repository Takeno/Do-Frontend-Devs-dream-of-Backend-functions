"use server";

export async function voteUpServerSide() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("vote up server side!");

  return 22;
}
