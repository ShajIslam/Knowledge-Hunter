import Profile from "../../assets/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between border-b-2">
            <h1 className="text-3xl">knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;