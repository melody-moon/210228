import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../../constants'
import { useUserContext } from '../../../contexts/user-context'
import Webtoon from './webtoon'
const Container = styled.div`
  padding: 20px 17px;
`

const ScrollContainer = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`

const Title = styled.h3`
  margin: 12px 0;
  font-weight: bold;
`

function RecentlyWebtoons() {
  const {
    state: { recentlyWebtoons, user },
  } = useUserContext()
  const history = useHistory()
  if (!recentlyWebtoons.length) {
    return null
  }
  //const props = useUserContext()
  //console.log(props)

  const moveToDetail = (webtoon) => {
    console.log(webtoon)

    history.push(`${ROUTES.WEBTOON.HOME}/${webtoon.id}`)
  }

  return (
    <Container>
      <Title>{user.name}님의 최근 본 웹툰</Title>
      <ScrollContainer>
        {recentlyWebtoons.map((webtoon) => {
          return (
            <Webtoon
              onClick={moveToDetail}
              webtoon={webtoon}
              key={webtoon.ib}
            />
          )
        })}
      </ScrollContainer>
    </Container>
  )
}

export default RecentlyWebtoons
