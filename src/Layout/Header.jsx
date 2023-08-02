import logo from '../images/react.png';

const Header = () =>{
    return (
        <TopNavigationBar/>
    );
};

function TopNavigationBar(){
    return (
       
       <div className="pt-3 py-2 pl-2" style={{borderBottom:"1px solid #777"}}>
        <img src={logo} style={{height:"35px", verticalAlign:"top"}} alt="logo.png"></img>
            <span className="text-white-50 h2 m-2 pt-4">CountOpedia</span>
       </div>
    );
}

// function MainHeader(){
//     const textString = "React Course - CountOpedia";
//     return (<p>{textString}</p>);
// }


export default Header;