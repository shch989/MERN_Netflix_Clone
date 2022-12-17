import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      <div className="body flex columu a-center j-center">
        <div className="text flex column">
          <h1>영화와 시리즈를 무제한으로.</h1>
          <h4>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h4>
          <h6>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </h6>
        </div>
        <div className="form">
          <input type="email" placeholder='이메일 주소' name='email' />
          <input type="password" placeholder='비밀번호' name='password'/>
          <button>시작하기</button>
        </div>
        <button>Log In</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5)
  }

`

export default Signup
