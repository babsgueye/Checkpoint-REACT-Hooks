import Card from 'react-bootstrap/Card';
import Movies from './Movies';

const Movie = ({posterUrl, title, description, rate}) => 
{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterUrl}/>
            <Card.Body>
            <Card.Title>titre: {title}</Card.Title>
            <Card.Text>
                
                description: {description}
                <br/>
                rate: {rate}
                
            </Card.Text>
            </Card.Body>
        </Card>
        );
  };
  export default Movie;
  
  