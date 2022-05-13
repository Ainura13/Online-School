import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../contexts/CartContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';
import { ADMIN } from '../../helpers/consts';
import { useProducts } from '../../contexts/CourseContextProvider';

export default function CourseCard({ item }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  console.log(email);

React.useEffect(() => {
  getProductDetails(id)

}, [])


  return (
    <Card 
    
    sx={{my: 3, display:'flex', justifyContent:'space-around', maxWidth: 600, maxHeight: 400, border:"2px solid #2e7d32", }}>
      <CardMedia
    onClick={() => navigate(`/courses/${item.id}`)}

        component="img"
        height="200"
        image={item.picture}
        alt={item.name}
      />
      <CardContent
    onClick={() => navigate(`/courses/${item.id}`)}
      
      >
        <Typography 
        gutterBottom variant="h5" 
        component="div"
        >
          {item.name}
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: 'green', fontWeight: '700' }}
        >
          {item.price}$
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>

            <Button variant='outlined' color='success' size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              Edit
            </Button>
            <Button variant='outlined' color='error' size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
              color={checkProductInCart(item.id) ? 'primary' : ''}
            />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
