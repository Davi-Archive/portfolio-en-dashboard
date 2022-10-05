import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    Avatar,
    CardContent,
    Typography,
    IconButton,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { motion } from 'framer-motion'
import "./Testimonials.scss";

const dataBlog = [
    {
        _id: 12345,
        imgUrl: "https://static1.personality-database.com/profile_images/6b2cea7df9d043c79f65a371f64cb61a.png",
        name: "Loading",
        company: "Retrieving Data",
        feedback: "hi",
    },
    {
        _id: 12345,
        imgUrl: "https://static1.personality-database.com/profile_images/6b2cea7df9d043c79f65a371f64cb61a.png",
        name: "Loading",
        company: "Retrieving Data",
        feedback: "ola",
    },
    {
        _id: 12345,
        imgUrl: "https://static1.personality-database.com/profile_images/6b2cea7df9d043c79f65a371f64cb61a.png",
        name: "Loading",
        company: "Retrieving Data",
        feedback: "amigo",
    },
]

export const About = () => {
    const dateTransformed = new Date().toLocaleString('pt-BR')
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`)
    }
    const handleDelete = () => {
        /* deleteRequest().then(data => console.log(data))
            .then(() => navigate("/myBlogs"))
            .then(() => navigate("/blogs")) */
    }
    const deleteRequest = async () => {
        /* const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/blog/${id}`)
            .catch(err => console.log(err))
        const data = await res.data;
        return data; */
    }
    return (
        <div className='wrapper'>
            {""}
            {dataBlog.map((testimonial, index) => (
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
                                onClick={handleEdit}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={handleDelete}
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
                                {console.log(testimonial.imgUrl)}
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