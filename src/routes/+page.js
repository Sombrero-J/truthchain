// export const ssr = false;

export async function load({ fetch }) {
    const res = await fetch(`../api`);
    const contents = await res.json();

    console.log("load function called");

    return {contents};
  }