import { Link } from "react-router-dom"

const ErrorPage = ()=>{

  return(
    <section>
      <h1>404</h1>  
      <p>Page not found</p>
      <Link to='/'>Back to home Page</Link>
    </section>
  )
}

export default ErrorPage