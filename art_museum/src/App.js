import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App(props) {
  return (
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
