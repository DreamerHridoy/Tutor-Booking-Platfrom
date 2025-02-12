import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import PrivateRoute from "./PrivateRoute";
import BookTutor from "../pages/BookTutor/BookTutor";
import MyBookTutor from "../pages/MyBookTutor";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import LanguageCategories from "../pages/Home/LanguageCategories";
import AddTutorial from "../pages/AddTutorial/AddTutorial";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorials/UpdateTutorial";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/MyTutorials/About us/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/tutors/:id",
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://tutor-booking-platform-server-side.vercel.app/tutors/${params.id}`
            );
            if (!response.ok) throw new Error("Failed to fetch tutor details");
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Error("Loader failed");
          }
        },
      },
      {
        path: "/findTutor/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://tutor-booking-platform-server-side.vercel.app/findTutors/${params.id}`
            );
            if (!response.ok)
              throw new Error("Failed to fetch category details");
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Error("Loader failed");
          }
        },
      },
      {
        path: "/findTutor",
        element: (
          <PrivateRoute>
            <LanguageCategories />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookTutor/:id",
        element: (
          <PrivateRoute>
            <BookTutor />
          </PrivateRoute>
        ),
      },
      {
        path: "/addTutorials",
        element: (
          <PrivateRoute>
            <AddTutorial />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTutorial/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorial />
          </PrivateRoute>
        ),
      },
      {
        path: "/myTutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookTutor",
        element: (
          <PrivateRoute>
            <MyBookTutor />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
