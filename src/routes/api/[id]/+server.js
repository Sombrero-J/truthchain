import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE({ params }) {
    const id = params.id;
    try {
      const contentId = parseInt(id, 10);
      if (isNaN(contentId)) {
        return new Response(JSON.stringify({ error: "Invalid content ID" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
  
      const deletedContent = await prisma.content.delete({
        where: { id: contentId },
      });
      
      console.log("deletedContent", deletedContent);
      return new Response(JSON.stringify(deletedContent), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Failed to delete content:", error);
      return new Response(JSON.stringify({ error: "Failed to delete content" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }