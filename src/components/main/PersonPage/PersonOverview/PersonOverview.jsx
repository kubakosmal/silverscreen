export default function PersonOverview(props) {
  return (
    <div className="text-sm font-ibm">
      <div className="font-lato">
        <h3 className="text-lg text-white">Personal info</h3>
        <div className="my-2">
          <p className="text-md font-bold">Known for</p>
          <p className="text-secondary text-xs">{props.knownFor}</p>
        </div>
        <div className="my-2">
          <p className="text-md font-bold">Gender</p>
          <p className="text-secondary text-xs">{props.gender}</p>
        </div>
        <div className="my-2">
          <p className="text-md font-bold">Born in</p>
          <p className="text-secondary text-xs">{props.birthday}</p>
        </div>
        {props.deathday ? (
          <div className="my-2">
            <p className="text-md font-bold">Died in</p>
            <p className="text-secondary text-xs">{props.deathday}</p>
          </div>
        ) : (
          false
        )}
        <div className="my-2">
          <p className="text-md font-bold">Place of Birth</p>
          <p className="text-secondary text-xs">{props.placeOfBirth}</p>
        </div>
      </div>
    </div>
  );
}
