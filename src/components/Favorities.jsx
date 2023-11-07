import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromListItem } from "../redux/action";

const Favorities = (i) => {
  const FavoritList = useSelector((state) => state.list.content);
  const dispacht = useDispatch();
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {FavoritList.map((fav, i) => (
              <ListGroup.Item key={i}>
                <Link to={`/${fav}`}>{fav}</Link>
                <Button
                  className="ms-2"
                  variant="danger"
                  onClick={() => {
                    dispacht(removeFromListItem(i));
                  }}
                >
                  DELETE
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorities;
