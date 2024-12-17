import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


export default function Newsboard({category}){

    const[articles,setArticles]=useState<any>([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(res=>res.json()).then(data=>
            {
                console.log(data)
                setArticles(data.articles)
            });
    },[category])
    return(
        <>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {
            articles.map((news:any,index:number)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
        </>
    )
}