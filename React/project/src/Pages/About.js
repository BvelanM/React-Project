import React from "react";
import { Link } from "react-router-dom";

const Panels = () => {
  return (
    <>
      <div className="movie-panels">
        <a href="">Recommended Movies</a>
        <br />
        <Link to={"https://www.youtube.com/watch?v=iKUzhzustok"}>
          <img src={require("../Media/poster/sherlock holmes.avif")} alt="s" />
        </Link>
        <Link to="https://www.youtube.com/watch?v=ZclBluzAZVE">
          <img src={require("../Media/poster/0.jpg")} />
        </Link>
        <Link to="Desc/GodFather.html">
          <img src={require("../Media/poster/god father.jpg")} hov />
        </Link>
        <Link to="https://www.youtube.com/watch?v=NLOp_6uPccQ">
          <img src={require("../Media/poster/BATMAN5.jfif")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=FnCdOQsX5kc">
          <img src={require("../Media/poster/it.jpg")} />
        </Link>
        <Link to="./Desc/John Wick.html">
          <img src={require("../Media/poster/javier_wick.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=JHIfHL5UgFs">
          <img src={require("../Media/poster/mortal kombat.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=zAGVQLHvwOY">
          <img src={require("../Media/poster/joker.jpg")} />
        </Link>
      </div>

      <div className="movie-panels">
        <Link to="">Action</Link>
        <Link to=""> MOVIES</Link>
        <br />
        <Link to="https://www.youtube.com/watch?v=NLOp_6uPccQ">
          <img src={require("../Media/poster/BATMAN5.jfif")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=UaVTIH8mujA">
          <img src={require("../Media/poster/god father.jpg")} />
        </Link>
        <Link to="John Wick.html">
          <img src={require("../Media/poster/javier_wick.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=iKUzhzustok">
          <img src={require("../Media/poster/sherlock holmes.avif")} alt="" />
        </Link>
        <Link to="https://www.youtube.com/watch?v=8Qn_spdM5Zg">
          <img src={require("../Media/poster/starwars.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=FnCdOQsX5kc">
          <img src={require("../Media/poster/it.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=JHIfHL5UgFs">
          <img src={require("../Media/poster/mortal kombat.jpg")} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=ZclBluzAZVE">
          <img src={require("../Media/poster/0.jpg")} />
        </Link>
      </div>
    </>
  );
          };

          export default Panels;
