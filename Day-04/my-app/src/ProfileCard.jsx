function ProfileCard({ name, bio, imageUrl }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: 16, width: 250 }}>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", borderRadius: 8 }}
        />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    );
  }
  
  export default ProfileCard;
  /*
function ProfileCard({ props }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: 16, width: 250 }}>
        <img
          src={props.img}
          alt={name}
          style={{ width: "100%", borderRadius: 8 }}
        />
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
      </div>
    );
  }
  
  export default ProfileCard;





  */