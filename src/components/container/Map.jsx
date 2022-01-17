import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class Map extends Component {
  googleGeocoder = null;
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      center: {
        lat: 36.68609272398972,
        lng: 138.23314952238516
      },
      isShowMarker: true
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
    // const labelStyle = {
    //   margin: "0",
    //   display: "block"
    // };
    const containerStyle = {
      width: "100%",
      height: "50vh"
      // margin: "auto"
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

// const SMapWrapper = styled(SContainerWrapper)``;

export default Map;
