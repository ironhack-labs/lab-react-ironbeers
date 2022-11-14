import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
