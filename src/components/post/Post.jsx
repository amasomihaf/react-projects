import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="./images/post1.jpg" alt="post1"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor, sit amet consectetur. </span>
            <hr/>
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa sunt autem ad! Ducimus nam unde facere quas, fuga, mollitia maxime ea voluptates praesentium dolor aliquam et eos voluptas dolorum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa sunt autem ad! Ducimus nam unde facere quas, fuga, mollitia maxime ea voluptates praesentium dolor aliquam et eos voluptas dolorum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa sunt autem ad! Ducimus nam unde facere quas, fuga, mollitia maxime ea voluptates praesentium dolor aliquam et eos voluptas dolorum.
        </p>
    </div>
  )
}
