import "./post.css"
import Postdefault from "../../img/postdefault.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={Postdefault} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae ad consectetur ratione reiciendis similique, dolores at maiores labore sed tempora asperiores facere, nihil doloribus a libero sapiente officia excepturi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae ad consectetur ratione reiciendis similique, dolores at maiores labore sed tempora asperiores facere, nihil doloribus a libero sapiente officia excepturi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae ad consectetur ratione reiciendis similique, dolores at maiores labore sed tempora asperiores facere, nihil doloribus a libero sapiente officia excepturi.
        </p>
    </div>
  )
}
