import {communityList} from "../../service/CommunityService";
import {Link} from "react-router-dom";

export default function TopMenu() {

  const communitys = communityList();

  return (
    <>
      <div className="nav-scroller bg-body shadow-sm">
        <nav className="nav" aria-label="Secondary navigation">
          {
            communitys.map(dto => {
              return (
                <Link key={`topMenu${dto.id}`} className='nav-link' to={"/" + dto.id}>{`#${dto.text}`}</Link>
              )
            }
            )
          }
        </nav>
      </div>
    </>
  );
}
