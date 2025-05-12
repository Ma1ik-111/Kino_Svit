import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchForm = ({ formSubmit, query }) => {
  const [inputValue, setInputValue] = useState(query);
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit(inputValue.trim());
    if (!inputValue.trim()) {
      e.target.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Film title"
          aria-label="Film title"
          name="query"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="outline-secondary" id="search-button">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default SearchForm;