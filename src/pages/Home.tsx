import { Link } from "react-router-dom";
import './Common.css'
//
const HomePage = () => {
  return (
		<div>
			<h1>Welcome to the Home page</h1>
			<Link to="/about"> Click here to go to the About page </Link>
		</div>
  )
}
//
export default HomePage;