import beagle from '../assets/beagle.png'
import { ImageDiv } from './Header.styles';


export interface IHeaderProps {
}




export function Header (props: IHeaderProps) {




  return (
    
    <section className='container text-center'>
        <div className="header">
        <h1 className='display-2'>Kennel</h1>
        </div>
         
        <div className="row d-flex flex-row justify-content-center align-items-center" style={{height: '60vh'}}>
            <div className="text_area col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
                <p>Kennelin mea esittää</p>
                <a href="#" className='btn btn-primary'>Tutustu koulutuksiin</a>
                
            </div>
            <ImageDiv className="image_area col-md-6 p-5">
                <img src={beagle} className='fluid-image col-10'/>
            </ImageDiv>
        </div>
     
    </section>
  );
  
}
