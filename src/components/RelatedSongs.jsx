import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="mt-16 flex flex-col">
    <h1 className="font-bold text-white text-3xl">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
        key={`${song.key}-${artistId+i}`}
        song={song}
        i={i}
        artistId={artistId}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        />
        ))}
    </div>
  </div>
);


export default RelatedSongs;
