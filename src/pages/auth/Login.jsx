import Container from "react-bootstrap/Container"; 
import LoginForm from "../../components/login/LoginForm";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
 
function Login() { 
  return ( 
    <div> 
      <Menu />
      <Container fluid className="loginContainer"> 
      <LoginForm />
      </Container> 
      <Footer/> 
    </div> 
  ); 
} 
 
export default Login;