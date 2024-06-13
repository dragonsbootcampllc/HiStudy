import Image from "next/image";

const AdminDashboardHeader = () => {
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <Image
                width={300}
                height={300}
                src="/images/team/avatar.jpg"
                alt="Instructor"
              />
            </div>
            <div className="tutor-content">
              <h5 className="title">data.text</h5>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardHeader;
