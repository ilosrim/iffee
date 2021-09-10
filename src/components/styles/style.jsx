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
    margin-top: 21px;
    li{
      list-style: none;
      display: flex;
      align-items: center;
      a{
        text-decoration: none;
      }
      svg{
        width: 20px;
        height: 20px;
      }
    }
  }
`;
export const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.title};
`;

// body section
export const Bodys = styled.div`
  width: 100%;
  border: 1px solid #f2f2f2;
`;
