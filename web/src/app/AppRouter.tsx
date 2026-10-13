import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { CarePage } from "../pages/CarePage";
import { ControlPage } from "../pages/ControlPage";
import { DevicePage } from "../pages/DevicePage";
import { HistoryPage } from "../pages/HistoryPage";
import { LightsPage } from "../pages/LightsPage";
import { ShowtimePage } from "../pages/ShowtimePage";
import { UsagePage } from "../pages/UsagePage";
import { WrappedPage } from "../pages/WrappedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/control" replace /> },
      { path: "control", element: <ControlPage /> },
      { path: "lights", element: <LightsPage /> },
      { path: "usage", element: <UsagePage /> },
      { path: "care", element: <CarePage /> },
      { path: "device", element: <DevicePage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "wrapped", element: <WrappedPage /> },
      { path: "showtime", element: <ShowtimePage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
