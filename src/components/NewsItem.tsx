interface Test {
  title: string;
  description: string;
  src: string;
  url: string;
}

export default function NewsItem({ title, description, src, url }: Test) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth:"345px" }}>
      <img src={src || 'https://via.placeholder.com/150'}  style = {{height:"200px",width:"325px"}} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"not available"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
