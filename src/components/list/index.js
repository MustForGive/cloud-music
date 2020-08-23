import React from 'react'
import { getCount } from '../../api/utils'
import {
  ListWrapper,
  List,
  ListItem
} from './style'
import LazyLoad from 'react-lazyload'


function RecommendList(props) {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  {/* 使用react-lazyload 进行性能优化，在非视口区域显示占位图片 */}
                  <LazyLoad placeholder={<img width='100%' height='100%' src={require('./music.png')} alt='music' />}>
                    <img src={item.picUrl + "?param=300*300"} width="100%" height="100%" alt="music"></img>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont paly">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default React.memo(RecommendList)