import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Componentsfolder/Home/Home";
import Login from "./Componentsfolder/Home/Login";
import Signup from "./Componentsfolder/Home/Signup";
import ProtectedRoute from "./Componentsfolder/Home/ProtectedRoute";
import { UserAuthContextProvider } from "./context/userAuthContext";
import AddNewTodo from "./components/AddNewTodo";

function App() {
  return (

    <>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
      <AddNewTodo/>
      
    </Container>


</>
    
  );
}

export default App;