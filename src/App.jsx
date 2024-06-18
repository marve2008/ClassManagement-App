import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchProvider } from "./helpers/Context";
import { AuthProvider } from "./helpers/AuthContext";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import StudentRegPage from "./pages/StudentRegPage";
import StudentDataTable from "./pages/StudentDataTable";

function App() {
  return (
    <>
      <Layout>
        <SearchProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<AdminLogin />} />
              <Route path="/student-reg" element={<StudentRegPage />} />
              <Route path="/data-table" element={<StudentDataTable />} />
            </Routes>

            {/* <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/form2" element={<Form1 />} />
            </Routes> */}
          </AuthProvider>
        </SearchProvider>
        <ToastContainer />
      </Layout>
    </>
  );
}

export default App;
