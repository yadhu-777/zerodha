

export default function Rightimg({source,heading,description,learnmore}){
    return(
        <div className="container">
            <div id="directionchange2" style={{marginTop:"5rem"}} className="row p-5 ">
                <div id="rightimg" className="col-md-6">
                <h2>{heading}</h2>
<p>{description}</p>
<div>

<a href="#">{learnmore}</a>
</div>
<div className="mt-4">
<a  href="#"><img style={{width:"20%" , marginRight:"10px"}} src="media/image/googlePlayBadge.svg"/></a>
<a href="#"><img style={{width:"18%"}}  src="media/image/appstoreBadge.svg"/></a>
</div>

                </div>
                <div  className="col-md-6">
                    
                <img id="stabalize1" style={{width:"80%"}} src={source}/>
                </div>
            </div>
        </div>
    )
}


