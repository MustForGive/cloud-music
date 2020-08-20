import styled from 'styled-components'
import style from '../../assets/global-styled'

export const Top = styled.div`
  display :flex;
  justify-content : space-between;
  background : ${style['theme-color']};
  padding : 5px 10px;
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
export const Tab = styled.div`
  height : 44px;
  display : flex;
  /* padding : 0 10px; */
  justify-content : space-around;
  background : ${style['theme-color']};
  a {
    flex : 1;
    padding : 2px 0;
    color : #e4e4e4;
    &.selected{
      span{
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export const TabItem = styled.div`
  height : 100%;
  display : flex;
  justify-content : center;
  align-items : center ;
`
