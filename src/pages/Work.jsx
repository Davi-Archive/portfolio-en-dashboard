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

const dataBlog = [
    {
        id: 1,
        title: "title",
        description: "desc",
        image: "https://d30903flf7mc19.cloudfront.net/wp-content/uploads/2018/12/05144836/Headhunter.jpg",
        userName: "Dave",
        date: "2022",
    },
    {
        id: 1,
        title: "title",
        description: "desc",
        image: "https://i.ytimg.com/vi/oa52MsJJ0AY/maxresdefault.jpg",
        userName: "Dave",
        date: "2022",
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
        <div>
            {""}
            {dataBlog.map((item, index) => (
                <Box key={index} marginTop={10}>
                    <Card sx={{
                        width: "auto",
                        marginLeft: '180px',
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
                                    {item.userName ? item.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={item.title}
                            subheader={dateTransformed}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.image}
                            alt={item.title}
                        />
                        <br />
                        <br />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About