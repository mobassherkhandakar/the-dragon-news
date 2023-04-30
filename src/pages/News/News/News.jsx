import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
  const loadNews = useLoaderData()
  const { _id, title, details, image_url,category_id } = loadNews;
  // console.log(title);

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/catagory/${category_id}`}>
        <Button variant='danger' ><FaArrowLeft/> All News in this catagory</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;