import React, { useEffect } from 'react'
import EmptyContent from '../components/EmptyContent'

import { connect } from 'react-redux'

const DetailHistory = ({ history }) => {
  useEffect(() => {
    console.log('HistoryDetail Screen')
    console.log(history)
  })
  return <EmptyContent title="" description="Detail History Screen" />
}

const mapStateToProps = (state) => ({
  history: state.history,
})

export default connect(mapStateToProps)(DetailHistory)
