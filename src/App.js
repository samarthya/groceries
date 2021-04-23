import React from 'react';
import './App.css';
import Header from './Header';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: "Broccoli",
          number: 3,
          purchased: false,
        },
        {
          name: "Banana",
          number: 12,
          purchased: true,
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header text="Groceries List" />
        <section className="section">
          <div className="container is-fluid">
            <div className="columns">

              <div className="column is-half is-offset-one-quarter">
                <form>
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        style={{ maxWidth: "6em" }}
                        className="input"
                        type="number"
                        placeholder="2"
                        min="1"
                        aria-label="number to purchase" />
                    </div>

                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        placeholder="Item to buy"
                        aria-label="item to purchase" />
                    </div>

                    <div className="control">
                      <input
                        className="button is-info"
                        type="submit"
                        value="Add Item" />
                    </div>
                  </div>
                </form>

                <div className="my-5">
                  <ul>
                    {this.state.items.map((item, index) => (
                      <li key={index}>
                        <label
                          className="checkbox"
                          style={{
                            textDectoration: item.purchased
                              ? "line-through"
                              : "none",
                          }}
                        >
                          <input checked={item.purchased} className="mr-3" type="checkbox" />
                          {item.name} <span className="has-text-weight-light">({item.number})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}



export default App;
