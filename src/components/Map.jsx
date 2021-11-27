import React, { Component } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { SContainerWrapper } from "./ContainerA";

class Map extends Component {
  googleGeocoder = null;
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      center: {
        lat: -3.745,
        lng: -38.523
      },
      isShowMarker: false
    };
  }
  changeLocationName(e) {
    if (e.key === "Enter") {
      this.geocode();
      return;
    }
    this.setState({
      locationName: e.target.value
    });
  }
  geocode() {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { address: this.state.locationName },
      (results, status) => {
        if (status === "OK") {
          let center = Object.assign({}, this.state.center);
          center = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          this.setState({
            center,
            isShowMarker: true
          });
        }
      }
    );
  }
  render() {
    const labelStyle = {
      margin: "0",
      display: "block"
    };
    const containerStyle = {
      width: "100%",
      height: "50vh",
      margin: "auto"
    };

    return (
      // <SMapWrapper>
      <LoadScript googleMapsApiKey="AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          zoom={18}
        >
          {this.state.isShowMarker && <Marker position={this.state.center} />}
        </GoogleMap>
      </LoadScript>
      //</SMapWrapper>
    );
  }
}

const SMapWrapper = styled(SContainerWrapper)``;

export default Map;

// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       //センターにもってきたい経度と緯度を記述
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       //サイズの大きさを指定
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             //マーカーの緯度と経度
//             lat={59.955413}
//             lng={30.337844}
//             text="マーカー"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;

// const containerStyle = {
//   width: "400px",
//   height: "400px"
// };

// const center = {
//   lat: 35,
//   lng: 139
// };

// export const Map = () => {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAoeC-jhvkXaUUCYG8S4KiSzGCxCoiFAO0">
//       <GoogleMap
//         mapContainerStyle={{
//           width: "400px",
//           height: "400px"
//         }}
//         center={{
//           lat: 35.69575,
//           lng: 139.77521
//         }}
//         zoom={17}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };
