import { createBrowserRouter } from "react-router-dom";
import { Home, Restaurant, Booking, BookingHistory } from "./pages";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    errorElement: <div>404 page</div>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "restaurant",
        children: [
          {
            path: ":id",
            children: [{ index: true, element: <Restaurant /> }],
          },
        ],
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking-history",
        element: <BookingHistory />,
      },
    ],
  },
]);

export default router;
