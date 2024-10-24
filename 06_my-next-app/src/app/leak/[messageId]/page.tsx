async function deletePrivateMessage(userId:number, messageId:string) {
  "use server"
  assertUserCanEditMessage(userId, messageId);
  return {ok: `Message ${messageId} deleted from user ${userId}`};
}


export default async function Page({ params }: {params: {messageId: string}}) {
  const userId = await getUserIdFromCookie();
  const action = deletePrivateMessage.bind(null, userId, params.messageId);

  return (
    <div>
      <h1>Your own secret message: {params.messageId}</h1>
      {/* @ts-expect-error */}
      <form action={action}><button type="submit">Delete</button></form>
    </div>
  )
}


async function getUserIdFromCookie(): Promise<number> {
  return 1;
}


function assertUserCanEditMessage(userId:number, messageId:string) {}