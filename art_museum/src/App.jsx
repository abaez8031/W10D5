import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import Error from "./components/Error";
import {Route, Switch} from "react-router-dom";

function App(props) {
  return (
    <div className="page-wrapper">
    <Switch>
      <Route exact path="/">
      <GalleryNavigation galleries={harvardArt.records}/>
      </Route>
      <Route exact path={`/galleries/:galleryId`}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
      <Route>
        <h2>Page Not Found</h2>
      </Route>
    </Switch>
    </div>

  );
}

export default App;
