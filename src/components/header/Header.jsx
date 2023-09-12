import Profile from "../../assets/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between border-b-2 mx-auto p-5">
            <h1 className="text-3xl font-extrabold">Knowledge Cafe</h1>
            <img className="author-img" src={Profile} alt="" />
        </div>
    );
};

export default Header;