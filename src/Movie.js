import Card from 'react-bootstrap/Card';


const Movie = ({posterUrl, title, description, rate}) => 
{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterUrl}/>
            <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>
                title: {title}
                <br/>
                description: {description}
                <br/>
                rate: {rate}
                
            </Card.Text>
            </Card.Body>
        </Card>
        );
  };
  export default Movie;
  
  