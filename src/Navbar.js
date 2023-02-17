const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: '5px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;