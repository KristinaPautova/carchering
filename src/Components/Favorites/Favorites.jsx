import React, {useContext, useEffect} from 'react';
import {favoritesContext} from "../../context/FavoritesContextProvider";
import Card from "@mui/material/Card";
import {Link} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import './Favorites.css'


const Favorites = () => {

    const {favorites,getFavorites, deleteFavoriteProduct} = useContext(favoritesContext)

    useEffect(() => {
        getFavorites()
    },[])


    return (
        <div className='lin_fon'>
        <div className='container1' style={{width: '100%'}}>
            {favorites.products &&
            favorites.products.map((elem) => (
                <div key={elem.item.id} style={{marginTop:"80px", marginBottom:'50px', minHeight: '500px'}}  className='card'>
                    <Card sx={{ maxWidth: 300 }}>
                        <Link to={`/nftDetails/${elem.item.id}`}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300px"
                                src={elem.item.img[0]}
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {elem.item.model}
                                <Button onClick={() => deleteFavoriteProduct(elem.item.id)}>
                                    <DeleteForeverTwoToneIcon/>
                                </Button>
                            </Typography>
                            <div className="text__person">
                                <div className="person__gold">
                                    <span>{elem.item.yearOfIssue}</span>
                                </div>
                            </div>
                            <div className="person__price">
                                <div className='person__price_left'>
                                    <div className='person__price_down'>
                                        <span>{elem.item.oneDay} сом</span>

                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))
            }

        </div>
        </div>
    );
};

export default Favorites;