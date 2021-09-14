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
    padding-right:15px !important;
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
  background-color: #FBFCFF;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 45px;
  .inputOne{
    width: 517px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left:15px;
    margin-right:34px;
    svg{
      font-size: 22px;
      margin-right: 15px;
    }
    input{
      border:none;
      outline:none;
      :placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #000000;
        opacity: 0.4;
      }
    }
  }
  .inputTwo{
    width: 310px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    select{
      outline:none;
      border:none;
      background:transparent;
      padding-right:115px;
      font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #000000;
        opacity: 0.4;
    }
  }

  .register{
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 120px;
    margin-left: 30px;
  }
`