import { useRouter } from "next/router";
import SidebarData from "../../data/dashboard/admin/siderbar.json";
import Link from "next/link";

const AdminDashboardSidebar = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list nav-tabs">
                  {SidebarData &&
                    SidebarData.siderbar.slice(0, 10).map((data, index) => (
                      <li className="nav-item" key={index} role="presentation">
                        <Link
                          className={`${path === data.link ? "active" : ""}`}
                          href={data.link}
                        >
                          <i className={data.icon} />
                          <span>{data.text}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardSidebar;
