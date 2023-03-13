import { Button } from "ui";

import { api } from "../utils/api";

export default function Web() {
  const hello = api.example.hello.useQuery({ name: "Jethalal Gada" });

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}`;

  console.log(URL);

  return (
    <div>
      <h1>Site</h1>
      <Button />
      <p>{process.env.NEXT_PUBLIC_API_KEY}</p>

      {/* Trpc Fetching */}
      <div>
        <div>{hello.data && <p> Hello mr/ms {hello.data.greeting} </p>}</div>
        <div>{hello.isLoading && <div>Loading...</div>}</div>
        <div>{hello.isError && <div>{hello.error.message}</div>}</div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }: any) {
  console.log(req.headers.host);

  return {
    props: {},
  };
}
