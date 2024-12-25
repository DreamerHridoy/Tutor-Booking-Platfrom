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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/tutors/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/tutors/${params.id}`),
      },
      {
        path: "/findTutor/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/findTutors/${params.id}`),
      },

      {
        path: "/findTutor",
        element: (
          <PrivateRoute>
            <LanguageCategories></LanguageCategories>
          </PrivateRoute>
        ),
      },
      {
        path: "bookTutor/:id",
        element: (
          <PrivateRoute>
            <BookTutor></BookTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "myBookTutor",
        element: (
          <PrivateRoute>
            <MyBookTutor></MyBookTutor>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
