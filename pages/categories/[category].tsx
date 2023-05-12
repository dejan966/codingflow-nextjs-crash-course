import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetStaticPaths, GetStaticProps } from "next";

interface CategoryNewsPageProps {
  newsArticles: NewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sport",
    "technology",
  ];

  const paths = categorySlugs.map((slug) => ({
    params: { category: slug },
  }));
  return {
    paths,
    fallback: false, // if you enter a slug thats not one of the "correct" it will show error 404 page
  };
};

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({
  params,
}) => {
  const category = params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
  return (
    <>
      <main>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
};

export default CategoryNewsPage;
