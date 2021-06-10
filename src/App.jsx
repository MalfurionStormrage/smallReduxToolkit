import React from 'react'
import Navbar from './components/Navbar';
/*route*/
import Routes from './routes/Routes';

export default function App() {
  return (

  	<section>
  		<Navbar />
  		<div className="container mt-2">
  			<Routes />
  		</div>
  	</section>
  )
}

