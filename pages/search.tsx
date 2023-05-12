import { NewsArticle } from "@/models/NewsArticles";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  return (
    <main>
      <h1>Search News</h1>
      <Form>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search query</Form.Label>
          <Form.Control
            name="searchQuery"
            placeholder="e.g. politics, sports,..."
          />
          <Button type="submit">Search</Button>
        </Form.Group>
      </Form>
    </main>
  );
};

export default SearchNewsPage;
