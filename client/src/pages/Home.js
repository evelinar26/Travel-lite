import { useState, useRef } from "react";
import styled from "styled-components";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import { Autocomplete, DirectionsRenderer } from "@react-google-maps/api";

function Home() {
  const center = { lat: 51.597656, lng: -0.172282 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  // --------- Hooks --------- //
  const [directionRes, setDirectionRes] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [travel_stops, setTravel_stops] = useState("");
  const origin = useRef();
  const destination = useRef();

  // --------- Calculate route Api data ---------//
  const calculateRoute = async () => {
    if (origin.current.value === "" || destination.current.value === "") {
      return;
    }

    const google = window.google;
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: origin.current.value,
      destination: destination.current.value,
      travelMode: google.maps.TravelMode.TRANSIT,
      //   waypoints: [
      //     {
      //       location: new google.maps.LatLng(48.864716, 2.349014),
      //       stopover: true,
      //     },
      //   ],
      transitOptions: {
        modes: [google.maps.TransitMode.TRAIN],
      },
    });
    console.log(results);
    const currentRoute = results.routes[0].legs[0];
    //   for (let i = 0; i < currentRoute.steps.length; i++) {
    //       if (currentRoute.steps[i].transit.travelMode === "TRAIN") {
    //         console.log(currentRoute.steps[i].transit.arrival_stop);
    //     }
      
    // }

    // To set specific stops you have to add waypoints within your results object.

    console.log(currentRoute.steps[0].transit.arrival_stop.name);
    setDirectionRes(results);
    setDistance(currentRoute.distance.text);
    setDuration(currentRoute.duration.text);
    setTravel_stops(currentRoute.steps[0].transit.arrival_stop.name);
  };

  // ----- Check if API is loading ----- //

  if (!isLoaded) {
    return <div>Loading..</div>;
  }

  // ----- Render JSX ---- //
  return (
    <>
      <Maps>
        <Search>
          <Autocomplete>
            <input
              type="text"
              id="outlined-basic"
              label="From"
              variant="outlined"
              size="small"
              ref={origin}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              id="outlined-basic"
              label="To"
              variant="outlined"
              size="small"
              ref={destination}
            />
          </Autocomplete>

          <SearchIcon type="submit" onClick={calculateRoute} />
        </Search>

        <Container>
          <h4>Distance: {distance}</h4>
          <h4>Duration: {duration}</h4>
          <h4>Stop: {travel_stops}</h4>
        </Container>

        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "97%" }}
        >
          <Marker position={center} />
          {directionRes && <DirectionsRenderer directions={directionRes} />}
        </GoogleMap>
      </Maps>
    </>
  );
}

export default Home;

// ----- Styled components (CSS) ------ //

const Maps = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const Search = styled.div`
  padding: 4px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  > .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
