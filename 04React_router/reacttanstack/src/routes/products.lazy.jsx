import { createLazyFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/Products"!
      <Link to="/products/1">Go to Product 1</Link>
      <br />
      <Link to="/products/2">Go to Product 2</Link>
      <br />
      <Link to="/products/3">Go to Product 3</Link>
      <br />
      <Outlet/>
    </div>
  );
}
