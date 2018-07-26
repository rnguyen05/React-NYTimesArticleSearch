import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import style from "./style.css";
import API from "../../utils/API";
import { ArticleList, ArticleListItem } from "./ArticleList";
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  state = {
    articles: [],
    articleSearch: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();

    API.getArticles(this.state.articleSearch)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {/* Header */}
        <Jumbotron />

        {/* Search Container */}
        <Container className="text-center container">
          <Form className="text-center">
            <h1 className="container-header">Search</h1>
            <FormGroup>
              <Label for="Topic" className="header">Topic</Label>
              <Input type="input" name="articleSearch" id="articleSearch" placeholder="Search a Topic" />
            </FormGroup>
            <FormGroup>
              <Label for="startYear" className="header">Start Year</Label>
              <Input type="input" name="startYear" id="startYear" placeholder="Start Year (YYYY)" />
            </FormGroup>
            <FormGroup>
              <Label for="startYear" className="header">End Year</Label>
              <Input type="input" name="endYear" id="endYear" placeholder="End Year (YYYY)" />
            </FormGroup>
            <Button className="header" size="lg"><i class="fas fa-search"></i> Submit</Button>
          </Form>
        </Container>

        {/* Search Results Container */}
        <Container className="text-center container">
            <h1 className="container-header">Search Results</h1>
              {!this.state.articles.length ? (
                <h1 className="text-center results">No Article to Display</h1>
              ) : (
                  <ArticleList>
                    {this.state.articles.map(article => {
                      return (
                        <ArticleListItem
                          key={article.title}
                          title={article.title}
                          href={article.href}
                          ingredients={article.ingredients}
                          thumbnail={article.thumbnail}
                        />
                      );
                      <Button className="header" size="lg"><i class="fas fa-arrow-circle-down"></i> Save</Button>
                    })}
                  </ArticleList>
                )}
           
        </Container>

        {/* Saved Article Container */}
        <Container className="text-center container">
            <h1 className="container-header">Saved Articles</h1>
        </Container>

      </div>
    );
  }
}

export default App;
