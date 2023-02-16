import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  className='text-center text-lg-right'>
      <div className='text-center p-3' style={{ backgroundColor: 'Transparent' ,height:90 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
        &copy; {new Date().getFullYear()} Happy Learning &nbsp;
        <a className='text-dark' href='https://punit-mistry.netlify.app'>
          PunitMistry.com
        </a>
      </div>
    </MDBFooter>
  );
}