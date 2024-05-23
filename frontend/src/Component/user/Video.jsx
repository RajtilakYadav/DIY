import React, { useEffect, useState } from 'react'
import { HiThumbUp } from "react-icons/hi";
import { HiThumbDown } from "react-icons/hi";
import { FaShareAlt } from "react-icons/fa";

const Video = () => {

  const [videoList, setVideoList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [count, setCount] = useState(0);


  const fetchVideoList = async () => {
    const res = await fetch("http://localhost:3000/product/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setVideoList(data);
    setMasterList(data);

  }
  useEffect(() => {
    fetchVideoList();
  }, [])

  const applySearch = (e) => {
    const inputText = e.target.value;

    setVideoList(masterList.filter((equipment) => {
      return equipment.title.toLowerCase().includes(inputText.toLowerCase());
    }));
  }

  const likes = () => {
    setCount(count + 1);

  }

  const dislikes = () => {
    setCount(count - 1);
  }

  // share video
  const shareVideo = (vid) => {
    if (navigator.share) {
      navigator.share({
        title: vid.title,
        text: vid.description,
        url: "http://localhost:3000/" + vid.video,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // fallback for browsers that do not support navigator.share
      alert("Your browser does not support the Web Share API");
    }
  }

  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <label for="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
        <div className="input-group w-100  py-4">
          <span className="border-warning input-group-text bg-warning text-white">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
          <input
            onChange={applySearch}
            type="text"
            className="form-control border-warning"
            style={{ color: "#7a7a7a" }}
          />
          <button className="btn btn-warning text-white">Search</button>
        </div>
        <div className="row  my-4 g-3">
          <h1 className=" fw-bold fs-1 text-center" style={{ color: "teal", fontFamily: "initial" }}>Tutorials</h1>
          {
            videoList.map((vid) => {
              return (<div className="col-md-4 text-center">

                <div className="card ">
                  <video controls className='card-img-top img-fluid ' src={"http://localhost:3000/" + vid.video} alt="" style={{ height: 200 }} />
                  <div className="card-body">

                    <h1 className="py-1 d-flex justify-content-start fw-bold " style={{ color: "teal", fontFamily: "initial" }}>{vid.description}</h1>
                    <h1 className='d-flex justify-content-start' style={{ color: "teal", fontFamily: "initial" }}>{vid.title}</h1>
                   


                    <div className='d-flex justify-content-between'>

                      <div className='mx-auto py-2'>
                        {/* <button onClick={likes} className='btn btn-outline-dark rounded-pill ' style={{ color: "blue", fontFamily: "initial" }}><i className="bi bi-hand-thumbs-up "></i>Likes <span>{count}</span> </button>
                        <button onClick={dislikes} className='btn btn-outline-dark rounded-pill' style={{ color: "teal", fontFamily: "initial" }}><i className="bi bi-hand-thumbs-down"></i>Dislike </button>
                        <button onClick={() => shareVideo(vid)} className='btn btn-outline-dark rounded-pill' style={{ color: "teal", fontFamily: "initial" }}><i className="bi bi-share"></i>Share</button> */}
                       
                       <HiThumbUp className='me-5 fs-2' onClick={likes} /> 
                        <HiThumbDown  className='me-5 fs-2' onClick={dislikes}/>
                    
                        <FaShareAlt  className='fs-2' onClick={() => shareVideo(vid)}/>
                       

                      </div>
                     
                    </div>
                  </div>

                </div>
              </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Video