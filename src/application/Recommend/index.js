import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'
import {renderRoutes} from 'react-router-config'

import Slider from '../../components/slider'
import Scroll from '../../baseUI/scroll/index'
import Loading from '../../baseUI/loading/index'

import RecommendList from '../../components/list'

import * as actionTypes from './store/actionCreators'

import { Content } from './style'

function Recommend(props) {
  //获得redux中传给props的值
  const { bannerList, recommendList , enterLoading} = props;
  //获得 redux 中传给props的 Dispatch 的方法
  const { getBannerDataDispatch, getRecommendListDataDispathch } = props

  useEffect(() => {
    //如果页面有数据则不会发送数据，整个页面只会进行一次请求，模拟componentDidMount的生命周期
    if (!bannerList.size){
    getBannerDataDispatch ();
    }
  }, [bannerList.size, getBannerDataDispatch]);
    useEffect(() => {
    if (!recommendList.size){
      getRecommendListDataDispathch ();
    }
  }, [getRecommendListDataDispathch, recommendList.size]);
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <Content>
      {/* 传入forceCheck 根据滚动位置，动态计算元素距离视窗的位置决定是否显示真的图片 */}
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      {/* 判断是否接收到response，未收到就使用Loading动画 */}
      {enterLoading ?<Loading></Loading> : null}
      {/* 由于无法渲染下一层路由，需要通过这种方式渲染下一层路由 */}
      {renderRoutes(props.route.routes)}
    </Content>

  )
}
//将 redux 全局的 state 映射到组件的props
const mapStateToProps = (state) => ({
  //使用immutable中的getIn方法来获取嵌套里的bannerList数据
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      //由于使用了 redux-thunk dispatch 可以放函数，并且会自动执行函数
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispathch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));