import {
  gameFallbackImages,
  gameGalleryFallbackImages,
} from "../../mock/constants";

export default function ImageTester() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Game Cover Images</h1>

      <div style={coverContainerStyle}>
        {Object.entries(gameFallbackImages).map(([id, url]) => (
          <div key={id} style={cardStyle}>
            <img
              src={url}
              alt={`Game ${id}`}
              style={coverImageStyle}
              onError={(e) => {
                e.target.style.border = "3px solid red";
              }}
            />
            <p>Game {id}</p>
          </div>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h1>Game Gallery Images</h1>

      <div style={galleryContainerStyle}>
        {Object.entries(gameGalleryFallbackImages).map(([gameId, images]) =>
          images.map((url, index) => (
            <div key={`${gameId}-${index}`} style={cardStyle}>
              <img
                src={url}
                alt={`Game ${gameId} Gallery ${index + 1}`}
                style={galleryImageStyle}
                onError={(e) => {
                  e.target.style.border = "3px solid red";
                }}
              />
              <p>
                Game {gameId} - {index + 1}
              </p>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

const coverContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const galleryContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const coverImageStyle = {
  width: "180px",
  height: "260px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const galleryImageStyle = {
  width: "320px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #ddd",
};
