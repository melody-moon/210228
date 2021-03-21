import React from 'react'
import moment from 'moment'

import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

function HomePage() {
  console.log(moment().day())

  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}요웹툰`
  return (
    <div>
      <Link to={ROUTES.WEBTOON.HOME}>홈</Link>|
      <Link to={ROUTES.WEBTOON.WEEKDAY}>{weekdayLabel}</Link>|
      <Link to={ROUTES.WEBTOON.GENRE}>베스트도전</Link>
    </div>
  )
}

export default HomePage
