const Following = (props) => {
  return (
    <li>
      <h4>Following</h4>
      <span>{props.user?.followings?.length}</span>
    </li>
  );
};

export default Following;
