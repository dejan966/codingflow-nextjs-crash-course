import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetStaticProps } from "next";

interface CategoryNewsPageProps{
    newsArticles: NewsArticle[]
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async({params}) =>{
    const category = params?.category?.toString()
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    const newsResponse : NewsResponse = await response.json();
    return {
      props:{ newsArticles: newsResponse.articles }
    }
}

const CategoryNewsPage = () => {
    return ( <></>  );
}
 
export default CategoryNewsPage;