import Container from "react-bootstrap/Container"; 
import RegisterForm from "../../components/register/RegisterForm";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
 
function Register() { 
  return ( 
    <div> 
      <Menu /> 
      <Container fluid className="loginContainer"> 
        <RegisterForm />
      </Container> 
      <Footer />
    </div> 
  ); 
} 

export default Register;
