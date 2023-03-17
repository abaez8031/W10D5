import react from "react";
import { Link } from "react-router-dom";

function ArtImageTile (props) {
  return(
    <Link to="/galleries/:galleryId/art/:artId"></Link>
  )
}

export default ArtImageTile;