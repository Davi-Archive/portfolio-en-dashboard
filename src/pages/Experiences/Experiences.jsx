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
import "./Experiences.scss";
import ReactTooltip from "react-tooltip";

const dataBlog = [
    {
        _id: 15646542344,
        year: "2022",
        name: "Loading",
        bgColor: "fff000",
        icon: "https://i.ytimg.com/vi/oa52MsJJ0AY/maxresdefault.jpg",
        desc: "Trying to retrieve data",
        company: "Trying to retrieve data",
    },
    {
        _id: 127745683234,
        year: "2022",
        name: "Loading.",
        bgColor: "fff000",
        desc: "Trying to retrieve data",
        company: "Trying to retrieve data",
        icon: "https://d30903flf7mc19.cloudfront.net/wp-content/uploads/2018/12/05144836/Headhunter.jpg"
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
            {dataBlog.map((experience, index) => (
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
                                    {experience.userName ? experience.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={experience.title}
                            subheader={dateTransformed}
                        />
                        <CardContent>
                            <motion.div className="app__skills-exp-item" key={experience._id}>
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{experience.year}</p>
                                </div>
                                <motion.div className="app__skills-exp-works">
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={experience.name}
                                            key={experience.name}
                                        >
                                            <h4 className="bold-text">{experience.name}</h4>
                                            <p className="p-text">{experience.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={experience.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                            scrollHide={true}
                                        >
                                            {experience.desc}
                                        </ReactTooltip>
                                    </>
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About