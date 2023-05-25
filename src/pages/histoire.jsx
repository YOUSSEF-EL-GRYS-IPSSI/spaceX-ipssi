import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/loaders/Loader";
import { toast } from "react-toastify";
import { Card, Title, Text, Divider, Button } from "@tremor/react";
import { RiArticleLine } from "react-icons/ri";
function convertUTCToFrenchDate(utcDate) {
  const date = new Date(utcDate);

  const frenchDate = date.toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

  return date.toLocaleDateString("fr-FR", { timeZone: "Europe/Paris" });
}

export const Histoire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/history")
      .then((response) => {
        setHistoryData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Une erreur est survenue");
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="history-cards-container">
          <h1
            className="text-4xl text-center"
            style={{
              margin: "20px",
            }}
          >
            L'histoire de SpaceX
          </h1>
          {historyData.map((history) => {
            return (
              <div className="card-container">
                <Card className="card">
                  <Title className="text-center">
                    {history.title} le{" "}
                    {convertUTCToFrenchDate(history.event_date_utc)}
                  </Title>
                  <Divider></Divider>
                  <Text
                    className="text-center text-card"
                    style={{
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    {history.details}
                  </Text>
                  <a
                    href={history.links.article}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      all: "unset",
                      marginTop: "10px",
                    }}
                  >
                    <Button icon={RiArticleLine} color="sky">
                      Voir l'article
                    </Button>
                  </a>
                </Card>
                <div className="first-line-container">
                  <div className="first-line"></div>
                </div>
                <div className="button-container">
                  <Card className="card-date">
                    <Title>
                      {convertUTCToFrenchDate(history.event_date_utc).slice(
                        6,
                        10
                      )}
                    </Title>
                  </Card>
                </div>
                <div className="first-line-container">
                  <div className="first-line"></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
