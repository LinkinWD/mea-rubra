import styled from 'styled-components'

export const Section = styled.section`
background: rgb(255,255,255) !important;
background: radial-gradient(circle, rgba(255,255,255,1) 8%, rgba(255,182,182,1) 76%) !important;
height: 80vh;
`

export const ImageDiv = styled.div`
position:relative;

border-radius: 50%;

overflow:hidden;
height:400px;


img {

    position: absolute;
    top:40%;
    left:40%;
}
`