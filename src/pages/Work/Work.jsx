import React, { useState, useEffect } from 'react';
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
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { requestData } from '../../container/dataService';
import "./Work.scss";

const dataBlog = [
    {
        _id: 16546769071,
        title: "Loading",
        projectLink: "#",
        codeLink: "#",
        imgUrl: "https://thicc.mywaifulist.moe/waifus/2284/c2fc255f9cba6692d6ea5cd7678c647ec3e9a9c3d229ffb22d456304d97e67c3_thumb.jpeg",
        description: "Loading.",
        name: "Davi",
        tags: ["1", "3", "4"],
    },
    {
        _id: 16546769071,
        title: "Loading",
        projectLink: "#",
        codeLink: "#",
        imgUrl: "https://thicc.mywaifulist.moe/waifus/2284/c2fc255f9cba6692d6ea5cd7678c647ec3e9a9c3d229ffb22d456304d97e67c3_thumb.jpeg",
        description: "Loading.",
        name: "Davi",
        tags: ["1", "3", "4"],
    },
    {
        _id: 16546769071,
        title: "Loading",
        projectLink: "#",
        codeLink: "#",
        imgUrl: "https://thicc.mywaifulist.moe/waifus/2284/c2fc255f9cba6692d6ea5cd7678c647ec3e9a9c3d229ffb22d456304d97e67c3_thumb.jpeg",
        description: "Loading.",
        name: "Davi",
        tags: ["1", "3", "4"],
    },
]

export const About = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        requestData('portfolio/en/work')
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

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
            {data.map((work, index) => (
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
                                    {work.userName ? work.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={work.title}
                            subheader={new Date(work.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <div className="app__work-item app__flex" key={work._id}>
                                <div className="app__work-img app__flex">
                                    <img src={work.imgUrl} alt={work.name} />

                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                            staggerChildren: 0.5,
                                        }}
                                        className="app__work-hover app__flex"
                                    >
                                        <a href={work.projectLink} target="_blank" rel="noreferrer">
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className="app__flex"
                                            >
                                                <AiFillEye />
                                            </motion.div>
                                        </a>
                                        <a href={work.codeLink} target="_blank" rel="noreferrer">
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className="app__flex"
                                            >
                                                <AiFillGithub />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className="app__work-content app__flex">
                                    <h4 className="bold-text">{work.title}</h4>
                                    <p className="p-text" style={{ marginTop: 10 }}>
                                        {work.description}
                                    </p>

                                    <div className="app__work-tag app__flex">
                                        <p className="p-text">{work.tags[0]}</p>
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