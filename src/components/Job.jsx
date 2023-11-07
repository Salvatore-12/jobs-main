import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; //mettiamo un  useDispatch che serve per spedire un'azione
import { addToFavoriteListItem } from "../redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch(); //messo useDispatch
  console.log(data);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>

      <Col xs={3}>
        <Button
          variant="info"
          onClick={() => {
            dispatch(addToFavoriteListItem(data));
          }}
        >
          Add to favourites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
