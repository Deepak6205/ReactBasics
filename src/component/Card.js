import { useNavigate } from "react-router-dom";

export const Card = ({ api }) => {
  const navigate = useNavigate();
  return (
    <div className="cardParent">
      {api.map((data) => {
        return (
          <div className="child" key={data.id}>
            <img alt="abc" src={data.image} />
            <h3>{data.title.slice(0, 25)}</h3>
            <p>{data.price} rs.</p>
            <p>{data.description.slice(0, 50)}</p>
            <p>Rating = {data.rating.rate}</p>
            <button
              onClick={() => {
                navigate(`/homework/homeworkDetails/${data.id}`);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
