import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} />
      <H1>Welcome to React</H1>
    </Header>
    <GoogleMapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: {'ここにgoogle map apiのkeyをドウゾ'}
      }}
      defaultCenter={{
        lat: 43.0582954,
        lng: 141.3466919
      }}
      defaultZoom={15}
    >
      <Pin
        lat={43.0582954}
        lng={141.3466919}
      >
      おおおんどおり
      </Pin>
    </GoogleMapReact>
    </GoogleMapWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: ${Color.Primary};
  height: 150px;
  padding: 20px;
  color: white;
`
const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
const H1 = styled.h1`
  font-size: 1.5em;
`
const Pin = styled.div<{
  lat: number,
  lng: number
}>`
`

const GoogleMapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export default App