import { NewsArticle } from "@/models/NewsArticles";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); //prevents the page from refreshing
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim(); //trim removes white space

    if (searchQuery) {
      alert(searchQuery);
    }
  }

  return (
    <main>
      <h1>Search News</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search query</Form.Label>
          <Form.Control
            name="searchQuery"
            placeholder="e.g. politics, sports,..."
          />
          <Button
            type="submit"
            className="mb-3"
            disabled={searchResultsLoading}
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </main>
  );
};

export default SearchNewsPage;
