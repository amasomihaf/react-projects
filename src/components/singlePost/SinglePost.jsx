import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/post1.jpg" alt="post1" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Hassan</b></span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste at vero dolorem harum laboriosam aut debitis. Deleniti omnis nesciunt corrupti debitis quos blanditiis excepturi, neque illum aliquid sapiente facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat amet tenetur dolorem pariatur fugit animi. Atque incidunt, voluptates est ratione cupiditate porro, sed magnam sit ab voluptatum quia tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio fuga esse sequi aut ab, dolorem quibusdam, eius impedit fugiat consectetur porro minima voluptate quasi nihil libero asperiores id voluptatem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque architecto dolor expedita impedit explicabo laudantium cupiditate ipsa et magnam, odit corrupti repellendus commodi corporis. Alias, ducimus dolorem. Atque, possimus quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat aliquam tenetur quaerat illum cum blanditiis repudiandae, vitae at nemo sapiente impedit voluptas sunt illo sequi magni omnis dolorem cupiditate.
        </p>

      </div>
    </div>
  )
}
