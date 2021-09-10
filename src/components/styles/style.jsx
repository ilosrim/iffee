import styled from "styled-components";

const colors = {
  title: `#3629B7`,
  link: `#838383`,
  boxTitle: `#BCBDC2`,
  userName: `#591AED`,
};

export const Container = styled.div`
  display: flex;
`;
// sidebar section
export const Sidebars = styled.div`
  width: 240px;
  border: 1px solid #f2f2f2;
  padding: 32px 26px 49px 30px;
`;
export const Brand = styled.img`
  width: 80px;
`;
export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:87px;
  ul{
    margin: 21px 0 123px;
    li{
      list-style: none;
      display: flex;
      align-items: center;
      margin-top:35px;
      color: ${colors.link};
      a{
        text-decoration: none;
        margin-left:25px;
        color: ${colors.link};
      }
      svg{
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const getColor = ({type}) => {
  switch(type){
    case 'blue': return `#3F7EF8`;
    case 'red': return `#FA6C6A`;
    case 'lightblue': return `#27C1B3`;
    default: return `#000000`;
  }
}
export const NavLinks = styled.ul`
  margin:21px 0 123px;
  li{
    list-style: none;
    display: flex;
    align-items: center;
    margin-top:35px;
    color: ${colors.link};
    a{
      text-decoration: none;
      margin-left:25px;
      color: ${colors.link};
    }
    svg{
      width: 20px;
      height: 20px;
    }
    .circle{
      width:15px;
      height:15px;
      border-radius:50%;
    }
    .blue{
      border: 1px solid #3F7EF8;
    }
    .red{
      border: 1px solid #FA6C6A;
    }
    .lightblue{
      border: 1px solid #27C1B3;
    }
  }
`
export const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.title};
`;
export const UserBox = styled.div`
  width: 183px;
  height: 63px;
  background: #F9FAFF;
  border-radius: 5px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 10px;
  img{
    margin-right:5px;
  }
  select{
    pedding-right:15px !important;
    border:none;
    outline:none;
    color: ${colors.title};
    background:transparent;
  }
`
// body section
export const Bodys = styled.div`
  width: 100%;
  border: 1px solid #f2f2f2;
`;
