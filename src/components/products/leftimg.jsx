


export default function Leftimg({source,heading,description,trydemo,learnmore}){
    return(
        <div className="container">
            <div style={{marginTop:"5rem"}} className="row p-6 ">
                <div className="col-6">
<img style={{width:"70%"}} src={source}/>

                </div>
                <div style={{padding:"3rem"}} className="col-6">
                    <h2>{heading}</h2>
<p>{description}</p>
<div style={{textDecoration:"none"}}>
<a style={{marginRight:"10px"}} href="#">{trydemo} </a>
<a href="#">{learnmore}</a>
</div>
<div className="mt-4">
<a  href="#"><img style={{width:"20%" , marginRight:"10px"}} src="media/image/googlePlayBadge.svg"/></a>
<a href="#"><img style={{width:"18%"}}  src="media/image/appstoreBadge.svg"/></a>
</div>

                </div>
            </div>
        </div>
    )
}