import React from 'react';
import ReactDOM from 'react-dom';
import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import Images from "./images.json";
import './App.css';

class App extends Component {

  state = {
    images
  };

  displayImages = id => {
    const images = this.state.images.filter(image => image.id != id);
    this.setState({ images });
  };
  render() {

    return (
      <Wrapper>

        {this.state.Images.map(image => (
          <Images
            id={Images.id}
            key={Images.id}
            image={Images.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
