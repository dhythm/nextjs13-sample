// https://nextjs.org/blog/next-13#server-components
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-cache",
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <h1>Hello, Next.js!</h1>
      {data && (
        <>
          <p>{data.title}</p>
          <p>{data.completed ? "done" : "doing"}</p>
        </>
      )}
    </main>
  );
}
