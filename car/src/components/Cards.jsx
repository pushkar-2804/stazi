import { useSelector } from "react-redux";
import CarData from "./CarData";
import { useParams } from "react-router-dom";

const Cars = () => {
  const card_data = useSelector((state) => state.data);
  var { pageNumber } = useParams();

  if (!pageNumber) pageNumber = 1;
  const itemsPerPage = 6;
  const startId = (pageNumber - 1) * itemsPerPage + 1;
  const endId = startId + itemsPerPage - 1;
  const filteredData = card_data.slice(startId - 1, endId);

  return (
    <div>
      <h1 className="text-center m-4 p-4">List of Cars</h1>
      <div className="container" style={{ width: "90%" }}>
        <div className="row p-1 m-1">
          {filteredData.map((car, index) => (
            <CarData key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
