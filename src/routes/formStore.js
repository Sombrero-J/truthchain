import { writable } from "svelte/store";

// export const proofSubmission = writable({});
// export const stakeSubmission = writable({});

const contentObject = {
  contentID: 0,
  tmbImage: "",
  content: "",
  contentTitle: "",
  images: [],
  references: "",
  stake: 0,
};

export const contentSubmission = writable(contentObject);