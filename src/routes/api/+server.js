import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST({ request }) {
  const data = await request.json();

  createContentWithRelations(data)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
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

export async function GET() {
  try {
    const contents = await prisma.content.findMany({
      include: {
        images: true,
        references: true,
        author: true,
      },
    });

    return new Response(JSON.stringify(contents), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to fetch contents:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch contents" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}



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
      thumbnailImg: contentObject.tmbImage,
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