"use client";
import { useStytchMember } from "@stytch/nextjs/b2b";

type Props = {};

const Profile = (props: Props) => {
  const { member } = useStytchMember();

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <span>Organisation</span>
        {member?.organization_id}
      </div>
      <div>
        <span>User Email</span>
        {member?.email_address}
      </div>
      <div>
        <span>User Name</span>
        {member?.name}
      </div>
    </div>
  );
};

export default Profile;
