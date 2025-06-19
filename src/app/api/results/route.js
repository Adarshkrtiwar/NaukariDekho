export async function GET() {
  return Response.json([
    { id: 1, exam: "SSC CGL 2024", result: "Declared" },
    { id: 2, exam: "UP Police 2024", result: "Coming Soon" }
  ]);
}