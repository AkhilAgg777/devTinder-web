import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div class="$$navbar bg-base-300 shadow-sm">
      <div class="flex-1">
        <a className="$$btn $$btn-ghost text-xl">🧑‍💻DevTinder</a>
      </div>
      {user && (
        <div class="flex gap-2">
          <div className="form-control">Welcome, {user.firstName}</div>
          <div class="$$dropdown $$dropdown-end mx-5 flex">
            <div
              tabIndex="0"
              role="button"
              class="$$btn $$btn-ghost $$btn-circle $$avatar"
            >
              <div class="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="$$badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
