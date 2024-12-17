export default function Navbar({setCategory}){


    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
    <a className="navbar-brand" href="#"> <span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("technology")}}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("business")}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("sports")}}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>{setCategory("entartainment")}}>Entartainment</div>
        </li>
       
      </ul>
    </div>
            </div>
        </nav>

        </>
    )
}