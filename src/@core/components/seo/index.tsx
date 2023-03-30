import React, { useState } from "react";
import Parser from "node-html-parser";
import Grid from '@mui/material/Grid'

const SEOAnalyzer = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [seoResult, setSeoResult] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/seo?url=${websiteUrl}`)
      .then((response) => response.json())
      .then((data) => setSeoResult(data));
  };

  return (
    <Grid>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>
      {seoResult && (
        <div>
          <h2>SEO Analysis for {websiteUrl}</h2>
          <p>Title: {seoResult.title}</p>
          <p>Meta Description: {seoResult.metaDescription}</p>
          <p>Heading 1: {seoResult.h1}</p>
          <p>Heading 2: {seoResult.h2}</p>
          <p>Heading 3: {seoResult.h3}</p>
          <p>Heading 4: {seoResult.h4}</p>
          <p>Heading 5: {seoResult.h5}</p>
        </div>
      )}
    </Grid>
  );
};

export default SEOAnalyzer;
