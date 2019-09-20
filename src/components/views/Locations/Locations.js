import React, {useState,useEffect} from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";
import Location from "./Location";
import { getLocations } from "../../../data";


const GridContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`;

const Locations = () => {
  const [locations, setLocations] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getLocations();
        setLocations(locations);
      } catch (e) {
        alert("An error occured");
      }
    };

    fetchData();
  }, []);

  const { results, info } = locations;
  return <Card.Group itemsPerRow={3}>{results.map(prop => <Location location={prop} />)}</Card.Group>;
};

export default Locations;
