

function PlayerDetail (props) {
    return (
        <div
              style={{
                width: "300px",
                height: "400px",
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
                color: "#000",
                position: "relative",
                cursor: "pointer",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                border: "1px solid #000",
              }}
              onClick={() => {
                console.log("Player ID:", props.player.id);
              }}
            >
              <img
                src={props.photo}
                alt={props.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <h2 style={{ marginTop: "1rem" }}>{props.name}</h2>
              {/* <p>{props.player.team.name}</p> */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                }}
              >
                {/* Display other player details as needed */}
              </div>
            </div>
    )
}

export default PlayerDetail