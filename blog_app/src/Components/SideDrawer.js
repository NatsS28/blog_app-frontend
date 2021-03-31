import './SideDrawer.css'


const SideDrawer = ({ show }) => {
    const SideDrawerClass = ["sidedrawer"];
    if (show) {
        SideDrawerClass.push("show");
    }


    return <div className={SideDrawerClass.join(" ")}>
        <ul className="sidedrawer_links">
            <li>
                <a href="/">View Blogs</a>


            </li>
            <li>
                <a href="/createpost">Create Post</a>

            </li>

        </ul>
    </div>





}

export default SideDrawer;