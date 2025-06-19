export async function GET() {
  return Response.json([
    { id: 1, title: "SSC CGL 2025", description: "Apply for SSC CGL 2025 now!" },
    { id: 2, title: "UP Police Constable", description: "UP Police latest vacancy." }
  ]);
}