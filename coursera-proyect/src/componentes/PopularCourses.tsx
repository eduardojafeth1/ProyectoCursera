import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import picture from './Example.png'
import illinios from "./imagenes/illinois-3.png"
import IBM from "./imagenes/1000px-IBM_logo.svg.png"
import PEN from "./imagenes/UniversityofPennsylvania_Vertical_RGB_coursera-cert.png"
import DUKE from "./imagenes/duke-3.png"
import Imperial from "./imagenes/imperial.png"

import Stack from 'react-bootstrap/Stack';
import ListCourses from './CourseCards';



function PopularCourses() {
    return (<>
        <Section />
        <ListCourses />
        
        <ListCourses tipo={"popular entre los usuarios"} titulo={"Data scince"} parrafo={"Lorem ipsum valoricatum "} />        
    </>
  );
}

export default PopularCourses;




function Section() {
    return (
        <Card className="my-3 mx-0 bg-bs-blue-100">
            
      <Card.Body>        
        <h4>We collaborate with 325+ leading universities and companies
University of Illinois at Urbana-Champaign
Duke University
Google
University of Michigan
</h4>
        <Stack direction="horizontal" gap={3} className="mt-5">
      <div className="p-2" ><img style={{maxHeight:"50px"}} src={illinios}/></div>
      <div className="p-2" ><img style={{maxHeight:"50px"}} src={IBM}/></div>    
      <div className="p-2" ><img style={{maxHeight:"50px"}} src={DUKE}/></div>
      <div className="p-2" ><img style={{maxHeight:"50px"}} src={Imperial}/></div>
      <div className="p-2" ><img style={{maxHeight:"50px"}} src={PEN} /></div>
    
    </Stack></Card.Body>
    </Card>
  );
}

