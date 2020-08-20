import styled from 'styled-components'
import style from '../../assets/global-styled'

export const ListWrapper = styled.div`
  max-width : 100%;
  .title{
    font-weight : 700;
    padding-left :6px;
    font-size : 14px;
    line-height : 60px ;
  }
`

export const List = styled.div`
  width :100%;
  display : flex;
  flex-wrap : wrap;
  justify-drection :row;
  justify-content : space-around ;
`

export const ListItem =styled.div`
  width : 32%;
  position : relative;
  .img_wrapper{
    position : relative;
    height : 0;
    /* padding-bottom 是相较于父元素宽度来计算的，我们可以使用这种方式来做一个自适应正方形 */
    padding-bottom:100%;
    .decorate{
      position : absolute;
      top:0;
      width :100%;
      height :35px;
      border-radius : 3px;
      background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
    }
    img{
      position : absolute;
      width :100%;
      height:100%;
      border-radius : 3px;
    }
  }
  .desc{
    overflow:hidden;
    margin-top:2px;
    padding:0 2px;
    padding: 0 2px;
      height: 50px;
      text-align: left;
      font-size: ${style["font-size-s"]};
      line-height: 1.4;
      color: ${style["font-color-desc"]};
 
  }
`