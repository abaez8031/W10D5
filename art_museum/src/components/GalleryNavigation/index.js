import react from "react";
import {NavLink} from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation (props) {
  const {galleries} = props;
  console.log(galleries)

  const galleryList = galleries.map((gallery) => {
    return <NavLink key={gallery.id} to={`/galleries/${gallery.galleryid}`}>
      {gallery.name}
    </NavLink>
  })

  return(
    <nav>
      <h1>Galleries</h1>

      <NavLink exact to="/">Galleries Index</NavLink>
      {galleryList}
    </nav>
  )
}

export default GalleryNavigation;