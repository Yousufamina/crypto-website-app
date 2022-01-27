import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Section from "./components/Section";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles.css"
import {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contents: []
    }
  }
  componentDidMount() {
    const apiUrl = 'http://crypto-currency-exc.herokuapp.com/getAllWebsiteContents';

    fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
              console.log(result);
              this.setState({
                contents: result.contents
              });
            }
        )
  }
  render(){
    return (
        <div>
          <Header></Header>
          <Section></Section>
          <MainContent contents={this.state.contents}></MainContent>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
