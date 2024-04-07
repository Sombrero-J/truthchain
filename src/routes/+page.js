export async function load({ fetch }) {
    const res = await fetch(`/api/db`);
    const contents = await res.json();

    console.log(contents);

    return {contents};
  }