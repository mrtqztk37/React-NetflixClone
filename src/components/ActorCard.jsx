import { baseImgUrl } from "../utils/constants";

const ActorCard = ({ actor }) => {
  const url = !actor.profile_path
    ? "/images.jpeg"
    : baseImgUrl + actor.profile_path;
  return (
    <div className="w-[130px] line-clamp-1">
      <img
        className="h-[165px] w-[120px]  rounded-lg object-cover"
        src={url}
        alt={actor.name}
      />
      <h2>{actor.original_name}</h2>
      <h2 className="">{actor.character}</h2>
    </div>
  );
};

export default ActorCard;
