import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    IconButton,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { requestData, fallback } from '../../container/dataService';
import "./Testimonials.scss";

const PATH = 'portfolio/en/testimonials';

export const About = () => {
    const [data, setData] = useState(fallback)
    const dateTransformed = new Date().toLocaleString('pt-BR')
    const navigate = useNavigate();
    useEffect(() => {
        requestData(PATH)
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    const handleEdit = () => {
        // pass id and path to <Edit /> component as in APP.jsx
        navigate(`../edit/testimonials/${id}`)
    }
    const handleDelete = () => {
        deleteDataToken(PATH, token, id)
            .then(data => console.log(data))
            .then(() => navigate("/"))
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((testimonial, index) => (
                <Box key={index} marginTop={10} marginRight={3}>
                    <Card sx={{
                        width: "100%",
                        marginLeft: '220px',
                        marginRight: "auto",
                        mt: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                onClick={() => handleEdit(testimonial._id)}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={() => handleDelete(testimonial._id)}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {testimonial.userName ? testimonial.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={testimonial.title}
                            subheader={dateTransformed}
                        />
                        <CardContent>
                            <div className="app__testimonial-item app__flex">
                                <img
                                    src={testimonial.imgUrl}
                                    alt={testimonial.name}
                                />
                                <div className="app__testimonial-content">
                                    <p className="p-text">
                                        {testimonial.feedback}
                                    </p>
                                    <div>
                                        <h4 className="bold-text">
                                            {testimonial.name}
                                        </h4>
                                        <h5 className="p-text">
                                            {testimonial.company}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About