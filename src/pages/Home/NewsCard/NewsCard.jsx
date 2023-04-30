import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaKaggle,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  FaKaggle;
  return (
    <div>
      <Card className="mb-2">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>{moment(author?.published_date).format("YYYY-MM-DD")}</p>
          </div>
          <div>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>{details.slice(0, 250)}.......</>
            )}
          </Card.Text>
          <Link to={`/news/${_id}`}>Read More</Link>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={
                <FaStar className="text-danger"/>
              }
              fullSymbol={<FaStar />}
            ></Rating> {rating.number}
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
