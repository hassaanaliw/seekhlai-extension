import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost:4410/api/v1/word/today/",
            quoteData: {},
            isLoaded: false
        };
    }

    componentDidMount() {
        let todayDate = new Date().getDate();
        const todayQuote = localStorage.getItem(todayDate);
        if (todayQuote) {
            this.setState({quoteData: JSON.parse(todayQuote), isLoaded: true})
        } else {
            this.fetchData();
        }
    }

    clearStorage() {
        this.setState({quoteData: {}, isLoaded: false});
        localStorage.clear();
        this.fetchData();
    }


    fetchData() {
        fetch(this.state.url)
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.text();
            })
            .then((data) => {
                // setState calls the render function again
                this.setState({quoteData: JSON.parse(data), isLoaded: true});
                let todayDate = new Date().getDate();
                localStorage.setItem(todayDate, JSON.stringify(data));

            })
            .catch(error => console.log(error));
    }


    render() {

        if (!this.state.isLoaded) {
            return (
                <div className="App">
                    <div className="loader">
                        <h1>Loading...</h1>

                    </div>
                </div>
            )
        }

        let data = this.state.quoteData;
        let _this = this;

        if (data.word_roman_urdu === undefined) {
            data = JSON.parse(data);
        }

        return (
            <div className="App">
                <div className="imageHolder">
                    <h3 className="wordText">{data.word_roman_urdu} - {data.word_nastaliq_urdu}</h3>
                    <h4 className="wordMeaning">
                        <strong> Meaning:</strong> {data.word_meaning}
                    </h4>

                    <div className="quoteTextHolder">

                        <div className="misra first">
                            {data.first_misra}

                            <div className="misra-translation">
                                {data.first_misra_translation}
                            </div>
                        </div>

                        <div className="misra second">
                            {data.second_misra}

                            <div className="misra-translation">
                                {data.second_misra_translation}
                            </div>
                        </div>

                    </div>

                    <div className="links">
                        <a href={data.ghazal_name_link}>{data.ghazal_name}</a>
                        <a href={data.ghazal_author_link}>{data.ghazal_author}</a>
                    </div>
                </div>

                <button style={{marginTop: '25px'}} onClick={() => _this.clearStorage()}>Clear Quote</button>
            </div>
        );
    }
}

export default App;
