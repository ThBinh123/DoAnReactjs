import "./Header.css"
import {Link} from "react-router-dom";
export default function Header(){
    return(
        <div className="shop">  
            <div className="logo">
                <Link className="logoshop" to="/"> LOGO SHOP </Link>
            </div>
            <Link className="shopList" to="/">TRANG CHU</Link>
            <Link className="shopList" to="/GIAYBONGDA">GIAY BONG DA</Link>
            <Link className="shopList" to="/PHUKIEN">PHU KIEN</Link>
            <Link className="shopList" to="/GIOHANG">GIO HANG</Link>
        </div>
    )
}