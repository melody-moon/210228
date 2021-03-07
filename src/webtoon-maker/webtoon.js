// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   padding: 15px;
//   margin-bottom: 20px;
// `
// function Webtoon({ webtoon }) {
//   // console.log(webtoon)
//   const { title, author, description, imageUrl } = webtoon

//   return (
//     <div>
//       <div>
//         <img src={imageUrl} alt={title} />
//       </div>
//       <div>
//         {title} / {author}
//       </div>
//       <div>{description}</div>
//     </div>
//   )
// }

// export default Webtoon

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
`

function Webtoon({ webtoon }) {
  const { title, author, description, imageUrl } = webtoon

  return (
    <Container>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        {title} / {author}
      </div>
      <div>{description}</div>
    </Container>
  )
}

export default Webtoon
