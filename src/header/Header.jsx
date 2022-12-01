import "./header.css"
import Noraltaa from "../../src/img/noraltaa.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">REACT & NODE</span>
            <span className="headerTitleLg">blog</span>
        </div>
        <img className="headerImg" src={Noraltaa} alt="" />
    </div>
  )
}
