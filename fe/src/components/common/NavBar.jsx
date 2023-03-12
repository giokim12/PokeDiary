import styled from 'styled-components';
import tw from 'twin.macro'


export default function Nav() {
  return (
    <NavHeader>
      <div>
        <img src={process.env.PUBLIC_URL +"/PokeLogo.jpg"} alt="" className='h-12'/>
        <img src={process.env.PUBLIC_URL +"/001MS.png"} alt="" className='h-12'/>
        <img src={process.env.PUBLIC_URL +"/004MS.png"} alt="" className='h-12'/>
        <img src={process.env.PUBLIC_URL +"/007MS.png"} alt="" className='h-12'/>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL +"/closedmachine.png"} alt="" className='h-10'/>
      </div>
    </NavHeader>
  );
}
const NavHeader = styled.header`
  ${tw `flex justify-between border-b-4 border-black bg-pokered p-2`}
  .left {
    height: 40px;
    ${tw `flex`}
  }
  .right {
    height: 40px;
  }
`;

