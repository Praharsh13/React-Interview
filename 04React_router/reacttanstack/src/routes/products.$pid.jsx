import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  return (
    <div>
      Hello "/Product/$pid"!
      <h2>THis is my product id: {pid}</h2>
    </div>
  );
}
