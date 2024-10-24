import { Suspense, use } from "react";

export default async function Page() {
  console.log('render page');
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ServerDate />
    </Suspense>
  );
}

//#region date
import { unstable_noStore } from "next/cache";

let cache:Promise<string> | null = null;
setInterval(() => cache = null, 5000);

export function ServerDate() {
  unstable_noStore();
  if(cache === null) {
    cache = new Promise<string>(
      resolve => setTimeout(
        () => resolve(new Date().toString()),
        2000
      )
    );
  }

  return <>{use(cache)}</>
}
//#endregion date

//#region cache
import { unstable_cache } from "next/cache";

const getCachedRelatedProducts = unstable_cache(
  async (userId) => fetchRelatedProducts(userId),
  ['related-products'],
  {
    revalidate: 60,
  }
);
//#endregion cache


async function fetchRelatedProducts(userId: string) {
  return [];
}