// import { blake2bHex } from "blakejs";

import { PrismaClient } from "@prisma/client";

// let imagesData = [];

export async function POST({ request }) {
  const data = await request.json();
  // imagesData = await Promise.all(
  //   data.images.map(async (img) => ({
  //     imageData: await transformImage(img.imgURL),
  //     text_details: img.imgDetails,
  //   }))
  // );
  createContentWithRelations(data)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  // console.log("SUCCESSSSSSSS");
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Data received",
      receivedData: data,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

const prisma = new PrismaClient();

// async function transformImage(imageUrl) {
//   const response = await fetch(imageUrl);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch the image: ${response.statusText}`);
//   }

//   // Convert the response to an ArrayBuffer
//   const arrayBuffer = await response.arrayBuffer();
//   // Convert ArrayBuffer to Buffer for Node.js (if needed)
//   const imageBuffer = Buffer.from(arrayBuffer);
//   return imageBuffer;
// }

async function ensureAuthorExists() {
  const authorName = "Dummy Author";
  const authorAddress = "dummy_address";

  let author = await prisma.author.findUnique({
    where: {
      name: authorName,
      address: authorAddress,
    },
  });

  if (!author) {
    author = await prisma.author.create({
      data: {
        name: authorName,
        address: authorAddress,
      },
    });
  }

  return author.id;
}

async function createContentWithRelations(contentObject) {
  const authorId = await ensureAuthorExists();

  const content = await prisma.content.create({
    data: {
      title: contentObject.contentTitle,
      contentText: contentObject.content,
      stake: contentObject.stake,
      approved: false, // Assuming new content is not approved by default
      author: {
        connect: { id: authorId },
      },
      images: {
        create: contentObject.images.map((img) => ({
          imageURL: img.imgURL,
          text_details: img.imgDetails,
        })),
      },
      references: {
        create: contentObject.references.split(",").map((ref) => ({
          link: ref.trim(),
        })),
      },
    },
    include: {
      images: true, // Include related images in the response
      references: true, // Include related references in the response
    },
  });
  console.log(content);
}

// export const textToHash = "";
// const hash = blake2bHex(new TextEncoder().encode(textToHash));
// console.log(hash);
